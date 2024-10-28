import { storage } from "../lib/firebase/config";
import { v4 as uuidv4 } from "uuid";
  import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadImage = async (previewUrl) => {
    try {
      const response = await fetch(previewUrl);
      const fileBlob = await response.blob();
      
      const storageRef = ref(storage, `images/${uuidv4()}`);
      const img = document.createElement('img');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      return new Promise((resolve, reject) => {
        img.onload = async () => {
          // Upload the original image
          await uploadBytes(storageRef, fileBlob);
          const originalUrl = await getDownloadURL(storageRef);
          const sizes = [200, 400, 800];
          const thumbnailUrls = [];
          for (const size of sizes) {
            canvas.width = size;
            canvas.height = size;
            ctx.drawImage(img, 0, 0, size, size);
            canvas.toBlob(async (blob) => {
              try {
                const thumbnailRef = ref(storage, `thumbnails/${size}_${uuidv4()}`);
                await uploadBytes(thumbnailRef, blob);
                const thumbnailUrl = await getDownloadURL(thumbnailRef);
                thumbnailUrls.push({ size, url: thumbnailUrl });

                if (thumbnailUrls.length === sizes.length) {
                  resolve({ originalUrl, thumbnails: thumbnailUrls });
                }
              } catch (error) {
                console.error('Error uploading thumbnail:', error);
                reject(error);
              }
            }, 'image/jpeg');
          }

          // Resolve immediately if no sizes are set
          if (sizes.length === 0) {
            resolve({ originalUrl, thumbnails: [] });
          }
        };

        img.onerror = (error) => {
          console.error('Error loading image:', error);
          reject(error);
        };

        img.src = URL.createObjectURL(fileBlob); // Set image src to the blob object URL
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  export default uploadImage
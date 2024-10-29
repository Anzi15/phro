"use client";
const stripHtml = (html) => {
  if (typeof window !== "undefined") {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
};
export default stripHtml;

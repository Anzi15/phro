"use client"
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

// export const metadata = {
//   title: 'My Page Title',
// }

export default function Home() {
  return (
  <>
    <main>
    <Carousel
    loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src="/child-abuse.webp"
        width={1920}
        height={1280}
        priority={true}
        alt="Child Abuse"
        className="h-full w-full object-cover"
      />
      <Image
        src="/poor-shopkeeper.webp"
        width={1920}
        height={1280}
        priority={true}
        alt="Human Rights"
        className="h-full w-full object-cover skeleton-loading"
      />
      <Image
        src="/disabled childs.webp"
        width={1920}
        height={1280}
        priority={true}
        alt="Disabled Children"
        className="h-full w-full object-cover skeleton-loading aspect-video"
      />
    </Carousel>
    
    </main>
  </>
  );
}

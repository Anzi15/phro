import React from 'react'
import stories from "../../data/successStories.json"
import Image from 'next/image';
import { redirect } from 'next/navigation'; 

const page = ({params}) => {
  const slug = params.slug;
  const storyInfo = stories.find(story => story.slug === slug);

   // If storyInfo is not found, redirect to /bods
  if (!storyInfo) {
    redirect('/success-stories'); // This handles the redirection
  }

  
  return (
    <section className="flex min-h-screen flex-col justify-center items-center">
<div className="py-12 w-full relative">
  <h2 className="text-5xl absolute font-bold uppercase bg-white text-blue-600 z-20"
      style={{ 
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        textAlign: "center" 
      }}>
    {storyInfo.title}
  </h2>
  
  <Image 
    src={storyInfo.image} 
    width={720} 
    height={720} 
    className="w-screen skeleton-loading inset-0 z-0 opacity-90p brightness-50 saturate-50 h-[20rem] object-cover" 
  />
</div>

      <div className='p-6 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert w-full' dangerouslySetInnerHTML={{__html:storyInfo.content}}>
        
      </div>
    </section>
  )
}

export default page

import React from 'react'
import eventsData from "../../data/events.json"
import Image from 'next/image';
import { redirect } from 'next/navigation'; 

const page = ({params}) => {
  const slug = params.slug;
  const eventInfo = eventsData.find(event => event.slug === slug);

   // If eventInfo is not found, redirect to /bods
  if (!eventInfo) {
    redirect('/bods'); // This handles the redirection
  }

  
  return (
    <section className="flex min-h-screen flex-col justify-center items-center justify-center">
<div className="py-12 w-full relative">
  <h2 className="md:text-5xl text-3xl max-w-[90%] text-wrap p-4 absolute font-bold uppercase bg-white text-blue-600 z-20"
      style={{ 
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        textAlign: "center" 
      }}>
    {eventInfo.title}
  </h2>
  
  <Image 
    src={eventInfo.imageSrc} 
    width={720} 
    height={720} 
    className="w-screen skeleton-loading inset-0 z-0 opacity-90p brightness-50 saturate-50 h-[20rem] object-cover" 
  />
</div>

      <div className='p-6 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert w-full' dangerouslySetInnerHTML={{__html:eventInfo.description}}>
        
      </div>
    </section>
  )
}

export default page

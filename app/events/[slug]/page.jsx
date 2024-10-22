import React from 'react'
import eventsData from "../../data/events.json"
import Image from 'next/image';
import { redirect } from 'next/navigation'; 

const page = ({params}) => {
  const slug = params.slug;
  const eventInfo = eventsData.find(evemt => event.slug === slug);

   // If eventInfo is not found, redirect to /bods
  if (!eventInfo) {
    redirect('/bods'); // This handles the redirection
  }

  
  return (
    <section className="flex md:flex-row flex-col p-8">
      <div className='md:w-1/2 w-full'>
      <div className="py-12">
      <h2 className=" text-5xl font-bold uppercase text-left text-blue-600">
              {eventInfo.name}
            </h2>
      </div>
      <div className="text-lg p-4">
      
      
      </div>
      </div>
      <div className='md:w-1/2 w-full'>
        <Image src={eventInfo.profile} width={720} height={720} className="w-full rounded-2xl aspect-square skeleton-loading"/>
      </div>
    </section>
  )
}

export default page

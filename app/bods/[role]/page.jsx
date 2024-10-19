import React from 'react'
import bodData from "../../data/bodMembers.json"
import Image from 'next/image';
import { redirect } from 'next/navigation'; 

const page = ({params}) => {
  const role = params.role;
  const roleData = bodData.find(member => member.role === role);

   // If roleData is not found, redirect to /bods
  if (!roleData) {
    redirect('/bods'); // This handles the redirection
  }

  
  return (
    <section className="flex md:flex-row flex-col p-8">
      <div className='md:w-1/2 w-full'>
      <div className="py-12">
      <h2 className=" text-5xl font-bold uppercase text-left text-blue-600">
              {roleData.name}
            </h2>
            <h4>{roleData.role}</h4>
      </div>
      <div className="text-lg p-4">
      
      {roleData.about}
      </div>
      </div>
      <div className='md:w-1/2 w-full'>
        <Image src={roleData.profile} width={720} height={720} className="w-full rounded-2xl aspect-square skeleton-loading"/>
      </div>
    </section>
  )
}

export default page

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip'
import { toast } from 'react-toastify';

const page = () => {
  const [tooltipMsg, setToolTipMsg] = useState("Click to copy")
  const handleCopy = () => {
    navigator.clipboard.writeText("PK66NAYA1234503360398419")
      .then(() => {
        setToolTipMsg("Copied to clipboard")
        toast.success("IBAN number copied to clipboard")

        setTimeout(()=>{
        setToolTipMsg("Click to copy")

        },1000)

        console.log("Text copied to clipboard");
        // Optionally, you could show a success message or change the tooltip message here
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
    } 
  return (
    <main className='relative py-10 flex flex-col items-center justify-between min-h-screen'>
      {/* Background Image */}
      <Image 
        src="https://cdn.pixabay.com/photo/2016/10/05/17/26/indian-1717192_640.jpg" 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className='absolute inset-0 z-[-1] opacity-15' 
      />
      <div>

      {/* Content Above the Background */}
      <h3 className='text-blue-500 md:text-4xl text-2xl font-bold'>
        Everything counts!
      </h3>
      <p>bring change in someone's life, by donating</p>
      </div>

    <div>
    <div className='min-h-28 w-fit'>
    <h3 className='text-blue-500 font-bold text-3xl w-full text-center'>
    IBAN NUMBER
</h3>

        <p 
        data-tooltip-id="my-tooltip" 
        data-tooltip-content={tooltipMsg} 
        onClick={handleCopy}
        className='cursor-pointer text-lg underline'
      >
        PK66NAYA1234503360398419
      </p>
      </div>
    </div>
    <div></div>
    <Tooltip id="my-tooltip" />
    </main>
  );
}

export default page;

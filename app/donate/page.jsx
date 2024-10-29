import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className='relative py-10 flex flex-col items-center min-h-screen'>
      {/* Background Image */}
      <Image 
        src="https://cdn.pixabay.com/photo/2016/10/05/17/26/indian-1717192_640.jpg" 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
        className='absolute inset-0 z-[-1] opacity-15' 
      />
      {/* Content Above the Background */}
      <h3 className='text-blue-500 md:text-4xl text-2xl font-bold'>
        Everything counts!
      </h3>
      <p>bring change in someone's life, by donating</p>
    </div>
  );
}

export default page;

import React from 'react'
import Image from 'next/image'

const BlogCard = ({coverImage, title, description}) => {
  return (
    <div className='w-full bg-white flex flex-col rounded-xl'>
        <Image src={coverImage} width={480} height={480} className='w-full' />
        <div>
            <h3 className='text-xl font-bold'>{title}</h3>
        </div>
    </div>
  )
}

export default BlogCard

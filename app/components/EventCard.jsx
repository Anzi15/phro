import React from 'react';
import Link from 'next/link';
const EventCard = ({ imageSrc, title, description, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <img
        className="object-cover w-full rounded-t-lg aspect-video"
        src={imageSrc}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;

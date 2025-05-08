import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard = ({ name, profile, role }) => {
  return (
    <Link href={`/bods/${role}`} className="block group bg-blue-gray-50 py-10 rounded-sm">

      <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
        {name}
      </h4>
      <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
        {role}
      </span>
    </Link>
  );
};

export default TeamCard;

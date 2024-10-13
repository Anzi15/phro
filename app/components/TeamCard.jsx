import React from "react";

const TeamCard = () => {
  return (
    <div class="block group md:col-span-2 lg:col-span-1 ">
      <div class="relative mb-6">
        <img
          src="https://pagedone.io/asset/uploads/1696238374.png"
          alt="Antonio image"
          class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
        />
      </div>
      <h4 class="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
        Antonio Roberto{" "}
      </h4>
      <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
        Founder
      </span>
    </div>
  );
};

export default TeamCard;

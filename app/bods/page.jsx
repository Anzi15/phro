import React from "react";
import TeamCard from "../components/TeamCard";
import bodData from "../data/bodMembers.json";

const page = () => {
  return (
    <section className="p-5 py-10">
      <div>
        <h2 className="py-4 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600 my-8">
          Our Board of Directors
        </h2>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        {bodData.map((member, i) => {
          return (
            <TeamCard
              key={i}
              name={member.name}
              profile={member.profile}
              role={member.role}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;

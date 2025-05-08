"use client";
import React from "react";
import TeamCard from "../components/TeamCard";
import successStoiresData from "../data/successStories.json";
import SuccessStoryCard from "../components/SuccessStoryCard";

const page = () => {
  return (
    <section>
      <div>
        <h2 className="py-4 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
          Success Stories
        </h2>
      </div>
      <div className="grid gird-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        {successStoiresData.map((story, i) => {
          return (
            <SuccessStoryCard
              key={i}
              title={story.title}
              imgSrc={story.image}
              description={story.content.slice(0, 50) + "..."}
              link={`/success-stories/${story.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;

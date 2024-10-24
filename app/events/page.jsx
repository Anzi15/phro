"use client"
import React from 'react'
import EventCard from "../components/EventCard"
import successStoiresData from "../data/successStories.json"
import eventsData from "../data/events.json"
import stripHtml from "../helper/htmlBuster"

const page = () => {
  return (
    <section>
      <div>
        <h2 className="py-12 text-5xl font-bold uppercase text-center text-blue-600">
          Events
        </h2>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-8 ma">
      {
        eventsData.slice(0, 4).map((event, i) => {
          return (
            <EventCard
              key={i}
              title={event.title}
              imageSrc={event.imageSrc}
              // Strip HTML and slice the first 50 characters
              description={stripHtml(event.description).slice(0, 50) + "..."}
              link={`/events/${event.slug}`}
            />
          );
        })
      }
      </div>
    </section>
  );
}

export default page

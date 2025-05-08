import EventCard from "../components/EventCard";
import eventsData from "../data/events.json";

const page = () => {
  return (
    <section>
      <div>
        <h2 className="py-4 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
          Events
        </h2>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-8 ma p-4">
        {eventsData?.map((event, i) => {
          return (
            <EventCard
              key={i}
              title={event?.title}
              imageSrc={event?.imageSrc}
              link={`/events/${event.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;

"use client";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import "react-icons";
import Intro from "./components/Intro";
import InitiativesCard from "./components/InitiativesCard";
import { FaBowlFood, FaGraduationCap } from "react-icons/fa6";
import { FaHandsHelping, FaTint } from "react-icons/fa";
import Link from "next/link";
import stripHtml from "./helper/htmlBuster";
import TeamCard from "./components/TeamCard";
import bodData from "./data/bodMembers.json";
import successStoiresData from "./data/successStories.json";
import eventsData from "./data/events.json";
import SuccessStoryCard from "./components/SuccessStoryCard";
import EventCard from "./components/EventCard";
import componentsData from "./data/componenets.json";

export default function Home() {
  const initiatives = [
    {
      icon: <FaBowlFood className="text-3xl text-blue-700" />,
      title: "World Hunger",
      description: `we believe that access to food is a basic human right, yet millions across the globe still suffer from hunger. Our "Fighting World Hunger" initiative is dedicated to ending hunger by delivering sustainable, long-term solutions to food insecurity.

      Our approach combines emergency food relief for communities in crisis, along with empowering local populations through education, agricultural training, and resource distribution. We work closely with farmers, local leaders, and partner organizations to improve food production, reduce waste, and build resilient food systems. Through innovative farming techniques, water management systems, and nutrition programs, we aim to address both the immediate and root causes of hunger.
`,
      link: "/initiative/world-hunger",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-blue-700" />,
      title: "Disaster Relief",
      description: `Natural disasters can strike without warning, leaving communities devastated and in urgent need of support. Our "Disaster Relief" initiative is focused on providing immediate aid and long-term recovery solutions to those affected by floods, earthquakes, and other catastrophes.
    
      We deliver emergency supplies such as food, water, and medical care, while also helping communities rebuild their homes and lives. Through partnerships with local organizations, we ensure a coordinated response to disasters and help vulnerable populations regain stability in their daily lives.`,
      link: "/initiative/disaster-relief",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-blue-700" />,
      title: "Education for All",
      description: `Education is the foundation for a brighter future, yet millions of children worldwide are deprived of this essential right. Our "Education for All" initiative aims to provide access to quality education, regardless of a child’s location, gender, or socioeconomic status.
    
      We build and support schools in underserved regions, provide educational materials, and offer scholarships for children who might otherwise miss out. By equipping students with knowledge and skills, we empower them to break the cycle of poverty and contribute to the development of their communities.`,
      link: "/initiative/education-for-all",
    },
    {
      icon: <FaTint className="text-3xl text-blue-700" />,
      title: "Clean Water Access",
      description: `Water is life, but millions of people around the world still lack access to safe, clean drinking water. Our "Clean Water Access" initiative is dedicated to providing sustainable water solutions in regions where water scarcity and contamination are critical issues.
    
      We install wells, rainwater harvesting systems, and water purification technologies to ensure communities have reliable access to clean water. Additionally, we promote hygiene and sanitation education to improve health outcomes and prevent waterborne diseases, transforming lives through clean, accessible water.`,
      link: "/initiative/clean-water-access",
    },
  ];

  return (
    <>
      <main>
        <Carousel
          loop={true}
          autoplay={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <Image
            src="/child-abuse.webp"
            width={1920}
            height={1280}
            priority={true}
            alt="Child Abuse"
            className="h-full w-full object-cover"
          />
          <Image
            src="/poor-shopkeeper.webp"
            width={1920}
            height={1280}
            priority={true}
            alt="Human Rights"
            className="h-full w-full object-cover skeleton-loading"
          />
          <Image
            src="/disabled childs.webp"
            width={1920}
            height={1280}
            priority={true}
            alt="Disabled Children"
            className="h-full w-full object-cover skeleton-loading aspect-video"
          />
        </Carousel>
        <Intro />
        <section className="p-3">
          <div className="w-full flex justify-between items-center p-4 flex-wrap">
            <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
              {" "}
              Our Components
            </h2>

            <Link href="/components" className="underline">
              view all
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gird-cols-2 gap-6 p-6 ">
            {componentsData.slice(0, 4).map((initiative, i) => {
              return (
                <InitiativesCard
                  key={i}
                  icon={initiative.icon}
                  title={initiative.title}
                  description={initiative.description}
                />
              );
            })}
          </div>
        </section>

        <div class="mx-auto max-w-7xl px-4 sm:px-6 py-10 lg:px-8">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
              {" "}
              Our BOD
            </h2>

            <Link href="/bods" className="underline">
              view all
            </Link>
          </div>
          <div class="grid gird-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            {bodData.slice(0, 4).map((member, i) => {
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
        </div>

        {/* success stories  */}
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
              {" "}
              Success Stories
            </h2>

            <Link href="/success-stories" className="underline">
              view all
            </Link>
          </div>
          <div class="grid gird-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            {successStoiresData.slice(0, 4).map((story, i) => {
              return (
                <SuccessStoryCard
                  key={i}
                  title={story.title}
                  image={story.image}
                  description={story.content.slice(0, 50) + "..."}
                  link={`/success-stories/${story.slug}`}
                />
              );
            })}
          </div>
        </div>

        {/* Events  */}
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
              {" "}
              Events
            </h2>

            <Link href="/events" className="underline">
              view all
            </Link>
          </div>
          <div className="grid gird-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            {eventsData.slice(0, 4).map((event, i) => {
              return (
                <EventCard
                  key={i}
                  title={event.title}
                  imageSrc={event.imageSrc}
                  // Strip HTML and slice the first 50 characters
                  description={
                    stripHtml(event.description).slice(0, 50) + "..."
                  }
                  link={`/events/${event.slug}`}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

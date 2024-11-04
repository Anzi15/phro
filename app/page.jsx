"use client";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import "react-icons";
import BlogCard from "./components/BlogCard";
import Intro from "./components/Intro";
import InitiativesCard from "./components/InitiativesCard";
import { collection, getDocs, limit } from "firebase/firestore";
import Link from "next/link";
import { db } from "./lib/firebase/config";
import stripHtml from "./helper/htmlBuster";
import TeamCard from "./components/TeamCard";
import bodData from "./data/bodMembers.json";
import successStoiresData from "./data/successStories.json";
import eventsData from "./data/events.json";
import SuccessStoryCard from "./components/SuccessStoryCard";
import EventCard from "./components/EventCard";
import componentsData from "./data/componenets.json";
import {
  FaBalanceScale,
  FaHandHoldingHeart,
  FaChild,
  FaBook,
  FaLeaf,
  FaVenusMars,
  FaTools,
} from "react-icons/fa";
import { useEffect, useState } from "react";
const iconMapping = {
  FaBalanceScale: FaBalanceScale,
  FaHandHoldingHeart: FaHandHoldingHeart,
  FaChild: FaChild,
  FaBook: FaBook,
  FaLeaf: FaLeaf,
  FaVenusMars: FaVenusMars,
  FaTools: FaTools,
};

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const collectionRef = collection(db, "blogs");
      const blogsArr = await getDocs(collectionRef, limit(2));
      const blogsData = [];
      blogsArr.forEach((blog) => {
        blogsData.push({ ...blog.data(), id: blog.id });
      });
      setBlogs([...blogsData]);
      setLoading(false);
    }

    fetchBlogs();
  }, []);

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
              const Icon = iconMapping[initiative.icon];
              return (
                <InitiativesCard
                  key={i}
                  icon={Icon} // Pass the actual component
                  title={initiative.title}
                  description={initiative.description}
                />
              );
            })}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 lg:px-8">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
              {" "}
              Our BOD
            </h2>

            <Link href="/bods" className="underline">
              view all
            </Link>
          </div>
          <div className="grid gird-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
              {" "}
              Success Stories
            </h2>

            <Link href="/success-stories" className="underline">
              view all
            </Link>
          </div>
          <div className="grid gird-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
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
                  link={`/events/${event.slug}`}
                />
              );
            })}
          </div>
        </div>

        {/* Blogs  */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
              {" "}
              Blogs
            </h2>

            <Link href="/blogs" className="underline">
              view all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
  {loading ? (
    <>
      <BlogCard loading={true} />
      <BlogCard loading={true} />
    </>
  ) : (
    blogs.map((blog, i) => (
      <BlogCard
        key={i}
        title={blog.title}
        coverImage={blog.coverImage}
        link={`/blog/${blog.id}`}
      />
    ))
  )}
</div>

        </div>
      </main>
    </>
  );
}

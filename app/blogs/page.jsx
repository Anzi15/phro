import React from "react";
import BlogCard from "../components/BlogCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase/config";
const page = async () => {
  const collectionRef = collection(db, "blogs");
  const blogsArr = await getDocs(collectionRef);
  const blogsData = [];
  blogsArr.forEach((blog) => {
    blogsData.push({ ...blog.data(), id: blog.id });
  });
  return (
    <section className="p-5">
      <div>
        <h2 className="py-12 md:text-3xl text-2xl font-bold uppercase text-center text-blue-600">
          Our Blogs
        </h2>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        {blogsData.map((blog, i) => (
          <BlogCard
            key={i}
            title={blog.title}
            coverImage={blog.coverImage}
            link={`/blog/${blog.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default page;

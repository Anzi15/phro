import AdminBlogCard from "../../components/AdminBlogCard"
import {db} from "../../lib/firebase/config"
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import Link from 'next/link'
import { CiSquarePlus } from 'react-icons/ci'

const page = async () => {
    const allBlogPostsDocs = await getDocs(collection(db, "blogs"))
    const blogPosts = []
    allBlogPostsDocs.forEach((blog)=>blogPosts.push({id: blog.id, ...blog.data()}))
  return (
    <main className="my-8">
    <h1 className="text-5xl text-left   ">Manage Blogs</h1>

    <section className="my-8 md:w-[80vw]">
      <div className="w-full flex md:justify-end">
        <Link
          href={"/admin/blogs/new"}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-4"
        >
          <CiSquarePlus className="text-2xl" />
          Write a new blog
        </Link>
      </div>
      {/* <BouncingBallLoader className="w-[80vw]" /> */}

      <div className="w-full my-12 text-left text-3xl pl-4 mb-0">
        Your blogs:
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blog) => (
            <AdminBlogCard
              key={blog.id}
              title={blog.title}
              image={blog.coverImage}
              link={blog.id}
            //   onDeleteProduct={handleDeleteProduct}
            />
          ))}
      </div>
    </section>
  </main>
  )
}

export default page
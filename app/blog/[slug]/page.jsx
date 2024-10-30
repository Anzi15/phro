import { db } from "../../lib/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const slug = params.slug;
  const blogDoc = await getDoc(doc(db, "blogs", slug));
  const blogData = blogDoc.data();
  // const blogData = {
  //   title: "Heavy Flood in Pakistan",
  //   slug: "heavy-flood-in-pakistan",
  //   content: `
  //     <h2>Overview of the Flood Situation</h2>
  //     <p>The recent heavy monsoon rains have caused devastating floods across several regions in Pakistan. Major rivers have overflowed, submerging towns and villages, displacing millions of people, and causing significant damage to infrastructure.</p>

  //     <h3>Impact on Communities</h3>
  //     <p>The floods have severely impacted rural and urban areas alike. Many families have lost their homes, and access to clean drinking water and food supplies has become a critical issue. Emergency services are overwhelmed, and rescue efforts are ongoing in the worst-hit regions.</p>

  //     <h3>Government and International Aid</h3>
  //     <p>The government of Pakistan has declared a national emergency and is coordinating with international aid organizations to provide relief. Supplies such as food, medicine, and temporary shelters are being distributed to affected areas. Several neighboring countries and global organizations have pledged support to help Pakistan recover from this disaster.</p>

  //     <blockquote>
  //       "The scale of the flooding is unprecedented, and the recovery will take months, if not years." - National Disaster Management Authority (NDMA)
  //     </blockquote>

  //     <h3>Climate Change and Future Challenges</h3>
  //     <p>Many experts believe that climate change has played a significant role in the intensity of these monsoon rains. The flooding in Pakistan serves as a stark reminder of the environmental challenges the country faces. Long-term strategies will be needed to improve flood defenses, infrastructure, and disaster preparedness.</p>

  //     <h3>How You Can Help</h3>
  //     <p>If you are looking to assist in the relief efforts, there are several ways to contribute. Many local and international NGOs are accepting donations to support flood victims. Monetary donations, food supplies, and volunteer services are all in high demand during this crisis.</p>

  //     <h4>Conclusion</h4>
  //     <p>The heavy flooding in Pakistan has highlighted the country's vulnerability to natural disasters. Immediate relief efforts are essential, but long-term planning will be required to mitigate the effects of future floods. Stay informed and consider how you can support those affected by this catastrophe.</p>
  //   `,
  //   author: {
  //     name: "John Doe",
  //     profilePic: "https://via.placeholder.com/150", // Placeholder author image
  //     bio: "John is a freelance writer covering environmental issues."
  //   },
  //   tags: ["Pakistan", "Flood", "Environment", "News"],
  //   category: "News",
  //   publishedAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  //   coverImage: "https://via.placeholder.com/800x400", // Placeholder cover image
  //   excerpt: "An overview of the devastating floods affecting millions in Pakistan.",
  //   status: "published",
  //   views: 1200,
  //   likes: 300,
  //   commentsCount: 50,
  //   isFeatured: true,
  // };

  return (
    <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert md:p-0 p-6">
        <header className="mb-4 lg:mb-6 not-format flex flex-col gap-6">
          <Image
            src={blogData.coverImage}
            width={1080}
            height={720}
            className="skeleton-loading w-screen aspect-video object-cover "
            alt={blogData.title} // Added alt text for accessibility
          />
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            {blogData.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></section>
        <section className="aspect-video rounded-lg w-full bg-blue-500 flex md:flex-row flex-col-reverse">
          <Image
            src={"https://i.ibb.co/VV2mxG4/humans.png"}
            width={480}
            height={480}
            className="md:h-full md:w-fit w-full  aspect-square md:block hidden"
          />
          <div className="md:w-1/2 w-full p-4 flex flex-col justify-center items-start">
            <h3 className="text-white font-bold text-3xl">
              We can't help everyone, but everyone can help someone.
            </h3>
            <Link
              href={"/donate"}
              className="bg-white rounded-full px-3 py-2 text-blue-500 font-bold no-underline"
            >
              Donate Now
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default page;

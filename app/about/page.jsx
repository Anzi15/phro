import React from 'react'
import Image from 'next/image'
// import CustomerBenefits from '../components'
// import TestimonialSlider from '../components/testimonials-slider'
// import FaqsSection from '../components/FaqsSection'

const page = () => {
  return (
    <main>
    <section className="bg-white dark:bg-gray-900 text-center">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 text-left">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Empowering Communities for a Brighter Future
            </h2>

            <p>
              At PHRO, we are dedicated to protecting human rights, providing education, and uplifting communities. 
              Our mission is to create a society where every individual is treated with dignity and respect. 
              Together, we can ensure justice and equality for all.
            </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 select-none">
            <Image
              className="w-full aspect-[10/16] object-cover  skeleton-loading rounded-lg min-h-[17rem]"
              src="https://i.ibb.co/0D66Nj1/shakib-uzzaman-4-RMw-H-XChyw-unsplash.jpg"
              alt="Empowering communities"
              width={640}
              height={854}
            />

            <Image
              className="mt-4 w-full min-h-[17rem] skeleton-loading lg:mt-10 rounded-lg aspect-[10/16] object-cover"
              src="https://i.ibb.co/CmTyyr2/gene-brutty-1aw-Tw-T66eb0-unsplash.jpg"
              alt="Human rights activism"
              width={640}
              height={854}
            />
        </div>
      </div>
    </section>

    <section className="bg-white dark:bg-gray-900 p-5 px-10 flex justify-center my-10">
      <div className="md:w-[40%] w-full flex flex-col py-4 gap-6">
          
          <h2 className="text-3xl font-bold uppercase text-brandRed">
            Our Mission
          </h2>
         
          <p className="text-lg font-normal">
            At PHRO, we aim to protect and promote human rights through advocacy, awareness, and education. 
            Our initiatives focus on providing relief to those in need, advocating for gender equality, 
            and ensuring access to basic human rights such as education, health, and justice.
          </p>
         
      </div>
    </section>

    <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col flex-wrap md:gap-0 gap-6">
      <div className="md:w-1/2 w-[95%] text-center">
          
          <h2 className="text-2xl font-bold uppercase text-brandRed py-2">
            Educational Programs
          </h2>
          <p className="text-lg font-normal">
            We believe in empowering future generations through education. Our programs provide access to quality education 
            for underprivileged children and youth.
          </p>
         
      </div>

      <div className="md:w-1/2 w-[95%] text-center p-10">
          
          <Image
            src="https://example.com/path-to-education-image.jpg"
            alt="Educational programs"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
         
      </div>
    </section>

    <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col-reverse flex-wrap md:gap-0 gap-6 md:pl-6">
      <div className="md:w-1/2 w-[95%] text-center p-10">
          
          <Image
            src="https://example.com/path-to-image3.jpg"
            alt="Human rights advocacy"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
         
      </div>
      <div className="md:w-1/2 w-[95%] text-center">
          
          <h2 className="text-2xl font-bold uppercase text-brandRed py-2">
            Human Rights Advocacy
          </h2>
          <p className="text-lg font-normal">
            Our advocacy programs focus on raising awareness about human rights violations and working with 
            government bodies to protect the rights of vulnerable communities.
          </p>
         
      </div>
    </section>

    <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col flex-wrap md:gap-0 gap-6">
      <div className="md:w-1/2 w-[95%] text-center p-10">
          
          <h2 className="text-2xl font-bold uppercase text-brandRed py-2">
            Relief and Aid Services
          </h2>
          <p className="text-lg font-normal">
            PHRO provides essential relief services to those affected by disasters, poverty, and conflict, 
            offering food, shelter, and medical assistance to those in need.
          </p>
         
      </div>
      <div className="md:w-1/2 w-[95%] text-center">
          
          <Image
            src="https://example.com/path-to-image4.jpg"
            alt="Relief and aid"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
         
      </div>
    </section>

    {/* <CustomerBenefits />
    <TestimonialSlider bgColor="#575761" />
    <FaqsSection /> */}
  </main>
  )
}

export default page

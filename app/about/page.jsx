import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
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
      <div className=" w-full flex flex-col py-4 gap-6">
          
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

    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-left">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1 text-left">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex text-left">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h6 className="text-gray-400 text-base font-normal leading-relaxed text-left">About Us</h6>
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2 className="text-blue-500 text-4xl font-bold font-manrope leading-normal  text-left">
                                Empowering Change, One Step at a Time
                            </h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                PHRO is committed to protecting human rights, fostering gender equality, building climate resilience, and empowering youth with skills for a better future.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex-col justify-center items-start gap-6 flex">
                        <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">11+ Years</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Championing Human Rights and Social Justice</p>
                            </div>
                            <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">20+ Initiatives</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Empowering Communities and Individuals</p>
                            </div>
                        </div>
                        <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">30+ Awards</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Recognized for Dedication and Impact</p>
                            </div>
                            <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">95% Community Satisfaction</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">Fostering Trust and Lasting Change</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
                href="/donate">
                    <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Donate Now</span>
                    <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
                <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                    <Image
                    width={1080}
                    height={1080} className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src="https://i.ibb.co/4ZmdhDc/skardu-pakistan-april-unidentified-children-village-south-skardu-learning-classroom-71949043.webp" alt="PHRO team image" />
                </div>
            </div>
        </div>
    </div>
</section>


    <section className="w-full flex py-10 items-center justify-between md:flex-row flex-col-reverse flex-wrap md:gap-0 gap-6 md:pl-6">
      <div className="md:w-1/2 w-[95%] text-center p-10">
          
          <Image
            src="https://i.ibb.co/x6tvMmZ/lachlan-rennie-Qr56l-Xymnz-Y-unsplash.jpg"
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
            src="https://i.ibb.co/jyjD1PH/3772221-758009709.jpg"
            alt="Relief and aid"
            height={428}
            width={639}
            className="aspect-video rounded-lg"
          />
         
      </div>
    </section>

    <section>
      {/* Container */}
      <div className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-7xl bg-gray-100 px-4 py-32 text-center">
          {/* Title */}
          <h2 className="mx-auto mb-6 max-w-3xl flex-col text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12">
            We can't help everyone, but everyone can help someone.
          </h2>
          <ul className="mx-auto mb-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8 md:gap-10 lg:mb-12">
            <li className="flex items-center">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                alt=""
                className="mr-2 h-8 w-8"
              />
              <p className="text-sm sm:text-base">Provide education to orphans</p>
            </li>
            <li className="flex items-center">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                alt=""
                className="mr-2 h-8 w-8"
              />
              <p className="text-sm sm:text-base">Make youth skilled</p>
            </li>
            <li className="flex items-center">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9473e2e6cf65_tick-circle.svg"
                alt=""
                className="mr-2 h-8 w-8"
              />
              <p className="text-sm sm:text-base">and much more..</p>
            </li>
          </ul>
          <Link
            href="/donate"
            className="mb-4 inline-block items-center bg-black px-6 py-3 text-center font-semibold text-white"
          >
            Donate now
          </Link>
          <p className="text-sm sm:text-base">Everything counts.</p>
        </div>
      </div>
    </section>
  </main>
  )
}

export default page

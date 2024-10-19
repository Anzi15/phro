import React from 'react'
import TeamCard from "../components/TeamCard";
import bodData from "../data/bodMembers.json"

const page = () => {
  return (
    <section>
        <div>
        <h2 className="py-12 text-5xl font-bold uppercase text-center text-blue-600">
              Our BOD
            </h2>
        </div>
        <div class="grid gird-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            {
              bodData.map((member, i)=>{
                return (
                  <TeamCard key={i} name={member.name} profile={member.profile} role={member.role}/>
                )
              })
            }
          </div>
    </section>
  )
}

export default page

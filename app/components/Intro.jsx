import Link from "next/link"
import { themeRoundedBtn } from "./Button"

const Intro = () => {
  return (
    <main className="p-8 flex ">
      <div className="md:w1/2 w-full">
.
      </div>
      <div className="md:w1/2 w-full">
        <h1 className="text-3xl font-semibold text-gray-900 my-10">
      About our organization
        </h1>
        <p>

        Phro is a non-governmental trust dedicated to serving the underprivileged communities of Pakistan.
        </p>
        <p>
        Our mission is to create sustainable solutions for some of the most pressing social issues, including poverty, hunger, education, and healthcare.
        </p>
        <div className="flex gap-4">
        <themeRoundedBtn text="Donate Now" href={"/donate"}/>
        </div>
      </div>
    </main>
  )
}

export default Intro

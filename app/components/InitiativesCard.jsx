import Image from "next/image"
import Link from "next/link"

const InitiativesCard = ({icon, title, description, link}) => {
  return (
    <Link href={`${link}`} className="bg-gray-300 flex flex-col gap-4 p-6 rounded-md hover:scale-105 transition-all">
        {/* <Image src={icon} alt={title} width="128" height="128" /> */}
        {icon}
        <h2 className="text-2xl ">
            {title}
        </h2>
        <p>
        {description.slice(0, 110) + '...'}
        </p>
    </Link>
  )
}

export default InitiativesCard

import React from 'react'
import componentsData from "../../data/componenets.json"
import {
  FaBalanceScale,
  FaHandHoldingHeart,
  FaChild,
  FaBook,
  FaLeaf,
  FaVenusMars,
  FaTools,
} from "react-icons/fa";

const page = ({params}) => {
  console.log('Params:', params);

  const componentName = params.componentName;
  console.log('Component Name:', componentName);
  console.log('Components Data:', componentsData);
  componentsData.forEach(component => {
    console.log('Checking Component Title:', component.title);
});

  const componentData = componentsData.find((component) => {
      return component.title.toLowerCase().replaceAll(" ", "-") === componentName;
  });
  console.log(componentData);
  
    const iconMapping = {
      FaBalanceScale: FaBalanceScale,
      FaHandHoldingHeart: FaHandHoldingHeart,
      FaChild: FaChild,
      FaBook: FaBook,
      FaLeaf: FaLeaf,
      FaVenusMars: FaVenusMars,
      FaTools: FaTools,
    };
    const Icon = iconMapping[componentData.icon]
  return (
    <section className="flex min-h-screen flex-col justify-center items-center justify-center">
<div className="py-12 w-full relative">
  {
    Icon && <Icon />
  }
</div>


      <div className='p-6 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert w-full' dangerouslySetInnerHTML={{__html:componentData.description}}>
        
      </div>
    </section>
  )
}

export default page

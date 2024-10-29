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
  
    // const iconMapping = {
    //   FaBalanceScale: FaBalanceScale,
    //   FaHandHoldingHeart: FaHandHoldingHeart,
    //   FaChild: FaChild,
    //   FaBook: FaBook,
    //   FaLeaf: FaLeaf,
    //   FaVenusMars: FaVenusMars,
    //   FaTools: FaTools,
    // };
    // const Icon = iconMapping[componentData.icon]
  return (
    <div>
   {/* {Icon && <Icon className="text-5xl text-blue-500" />} Render the icon component directly */}
    </div>
  )
}

export default page

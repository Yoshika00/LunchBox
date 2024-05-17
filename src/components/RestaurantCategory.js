import { FaArrowAltCircleDown } from "react-icons/fa";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data}) => {
    //console.log(data);

    const [showItems, setShowItems] = useState(true);


    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
    
       <div className="w-6/12 mx-auto my-6 p-4 shadow-lg bg-gray-50 ">

            {/* Accordion header */}

            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                 <span className="text-lg font-bold ">{data?.title}({data?.itemCards?.length})</span>
                 <span><FaArrowAltCircleDown /></span>
            </div>

           {/* Accordion body */}

           { showItems && <ItemList items={data?.itemCards} /> }


       </div>)
 }
export default RestaurantCategory;
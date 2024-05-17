import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="border p-3 mx-4 m-2 flex justify-center bottom-0 items-center shadow-2xl font-sans font-bold  text-center w-[98%] ">
        Created By Laxmi Dhiwar ❤️
          <span className="text-xl font-extrabold"> Lunch</span> 
          <span className="text-xl text-green-500 font-extrabold">Box</span>
          <span className="ml-2" > < FaRegCopyright />  </span>
          <span className="font-bold ml-1">2024</span>
          
      </div>
    );
  };
  
  export default Footer;
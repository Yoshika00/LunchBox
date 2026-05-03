import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link }  from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo1 from "../assets/img/logo1.png";
import { BiSolidCart } from "react-icons/bi";
import { useSelector } from "react-redux";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-green-50 shadow-lg font-serif">

      {/* Top bar */}
      <div className="flex justify-between items-center p-3">

        <img 
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            alt="logo"
            src={logo1} />

        {/* Hamburger (mobile only) */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-6">

          <li className="px-2">
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="px-2 hover:bg-green-600 hover:text-white rounded-lg">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2 hover:bg-green-600 hover:text-white rounded-lg">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2 hover:bg-green-600 hover:text-white rounded-lg">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="text-xl"> 
            <Link to="/cart" >Cart ({cartItems.length}) </Link>
            {/*<BiSolidCart />*/}
          </li>

        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col sm:hidden px-4 pb-4 gap-3">

          <li>Status: {onlineStatus ? "✅" : "🔴"}</li>

          <li className="hover:bg-green-600 hover:text-white p-2 rounded">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:bg-green-600 hover:text-white p-2 rounded">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:bg-green-600 hover:text-white p-2 rounded">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="text-xl"> 
            <Link to="/cart" >Cart ({cartItems.length}) </Link>
            {/*<BiSolidCart />*/}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;


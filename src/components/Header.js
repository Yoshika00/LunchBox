import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link }  from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo1 from "../assets/img/logo1.png";
import { BiSolidCart } from "react-icons/bi";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex p-2 justify-between shadow-lg bg-green-50 font-serif">

            <div >
                <img className="w-20 " src={logo1} />
            </div>

            <div className="flex items-center">
                <ul className="flex m-4">
                   <li className="px-4 hover:border hover:bg-green-600 hover:text-white hover:rounded-lg">
                         Online Status : {onlineStatus ? ("✅") : ("🔴")}
                   </li>

                    <li className="px-4 hover:border hover:bg-green-600 hover:text-white hover:rounded-lg"> 
                        <Link href="/">Home</Link>
                    </li>

                    <li className="px-4 hover:border hover:bg-green-600 hover:text-white hover:rounded-lg">
                        <Link to="/about">About Us</Link>
                    </li>

                    <li className="px-4 hover:border hover:bg-green-600 hover:text-white hover:rounded-lg ">
                        <Link to="/contact" >Contact us</Link>
                    </li>

                    <li className="px-4 text-xl"><BiSolidCart /></li>
                    <button className="px-4 hover:border hover:bg-green-600 hover:text-white hover:rounded-lg"
                    onClick={() => {
                        loginBtn === "Login" ? 
                        setLoginBtn("Logout") :
                        setLoginBtn("Login");
                    }} > {loginBtn} </button>
                </ul>
            </div>

        </div>
    )
}

export default Header;
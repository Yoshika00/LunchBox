import { useState } from 'react';
import Logo from './Logo';
import { Link } from "react-router-dom"
import useOnlineStatus from './utils/useOnlineStatus';
import { TiShoppingCart } from  "react-icons/ti"


const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState("Logout")

    const onlineStatus = useOnlineStatus()
    return (
        <div className='flex justify-between  border-b-1 border-gray-100 shadow-md '>
            <Logo />


            <div className='flex items-center'>
            
               <ul className='flex text-md  gap-5 px-5 text-black font-bold '>
                  <li className=" hover:scale-110">
                   Online Status : {onlineStatus ? ("✅") : ("🔴")}
                  </li>
                  <Link to="/">
                    <li className="hover:scale-110">Home</li> 
                  </Link>
                  <Link to="/about">
                     <li className="hover:scale-110">About</li>
                  </Link>
                  <Link to="/contact">
                     <li className="hover:scale-110">Contact</li>
                  </Link>
                  <li className='p-1 hover:scale-110'> <TiShoppingCart />  </li>
                  

                  <button className='hover:scale-110'
                  onClick={() => {
                     isLoggedIn === "Login" ?
                     setIsLoggedIn("Logout") :
                     setIsLoggedIn("Login")
                  }}>{isLoggedIn}</button>
                  
               </ul>
            </div>
            
          {/* <span className='m-12 px-4 py-1 border rounded-lg bg-green-500 '>
            {isLoggedIn ? 
            (<button onClick={() => {setIsLoggedIn(false)}}>Logout</button>) : 
            (<button onClick={() => setIsLoggedIn(true)}>Login</button> )}
            </span>  */}
            

            
         </div>
        
    )
}

export default Header
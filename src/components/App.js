import React, { createElement } from 'react';
import ReactDOM  from 'react-dom/client'; 
import Header from './Header';
import Footer from './Footer';
import { IMG_CDN } from './utils/constant';
import Body from './Body';
import About from './About'
import Contact from './Contact';
import Error from './Error'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';
import {lazy, Suspense} from "react"


/*
Header
   Logo
   Nav Items (right side)
   Cart

Body
   SearchBox
   RestaurantList
      ReastaurantCart
         -Image
         -Name
         -Rating
         -Cuisines
Footer
    Links
    Copy Right
*/ 



//const Grocery = lazy(() => import("./Grocery"))

const AppLayout = () => {
  return  (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
  )
};



const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu />
      }
    ]
  },
 
  

])



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)


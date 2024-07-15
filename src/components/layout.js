import React from 'react'
import { Outlet } from 'react-router-dom' 
import Category from './Category'
import CartTab from './cartTab' 
import { useSelector } from 'react-redux'
import Navbar from './NavBar'
import Hero from "./hero";
import HeroSection from './heroSection'
import AOS from "aos";


import Services from "./Services";

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  
    React.useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
    }, []);
  
  return (
    <div className='bg-primary duration-200'>
       <Navbar  handleOrderPopup={handleOrderPopup} /> 
       <Hero handleOrderPopup={handleOrderPopup}/>
        <main className={`w-[1200px]  max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56" }`}>

          <HeroSection />

       
         <Outlet />

          <Category />
        <Services />
            
        </main>
        <CartTab />
    </div>
  )
}

export default Layout
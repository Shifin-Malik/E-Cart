import React,{useState,useEffect} from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";

import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart'
import { Link } from "react-router-dom";


const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/",
  },
  
];

const OpenLinks = [
  {
  id: 1,
  name: "Profile",
  link:"/#"
},
{
  id: 2,
  name: "Settings",
  link:"/#"
},
{
  id: 3,
  name: "Sign up",
  link:<Link to="/login"></Link>
},
]


const Navbar = ({ handleOrderPopup }) => {
 
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      setTotalQuantity(total);
  }, [carts])
  const handleOpenTabCart = () => {
      dispatch(toggleStatusTab());
  }
  return (
    
    <div className="bg-secondary text-primary duration-200 relative z-0 md:pl-8 md:h-20 pl-0 px-4">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4 md:pl-0 pl-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              EKART
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold bg-secondary text-primary hover:text-third  duration-200"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-0 hidden group-hover:block w-[200px] rounded-md bg-secondary shadow-md dark:bg-gray-900 p-2 ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li>
                          <a
                            className="text-primary hover:text-third  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-2">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block ">
              <input
                type="text"
                placeholder="Search"
                className="rounded-md md:mr-6 w-96 pl-8 h-8 
              search-bar
              "
              />
              <IoMdSearch className=" text-xl text-gray-500 mr-[370px]  dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}
            <button className="relative p-3 mr-4 " onClick={handleOpenTabCart}>
              <FaCartShopping className="text-xl text-primary dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
              {totalQuantity}
              </div>
            </button>
          

           
            <div className="relative cursor-pointer group md:mr-16 mr:0 md:pr-0 pr-16">
            <img className="rounded w-8 h-8" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />

                  {/* Profile Links */}
                  <div className="absolute  hidden group-hover:block md:w-[130px] w-[100px] rounded-md  bg-secondary shadow-md dark:bg-gray-900 p-2  text-white ">
                    <ul className="   ">
                      {OpenLinks.map((data, index) => (
                        <li> 
                          <a
                            className="text-primary  hover:text-third duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
         
          </div>
        </div>
      </div>
    
    </div>
   
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

import { toast,  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);

  const { id, name, price, image, slug } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
    
  };


  return (
    <div className="bg-white p-5 rounded-xl shadow-sm ">
      <div className="flex justify-center">
        <Link to={slug}>
          <img
            src={image}
            alt=""
            className=" md:w-[120] md:h-[120px] w-[120] h-[80px] object-cover object-top drop-shadow-[0_80px_30px_#0007]"
          />
        </Link>
      </div>
      <h3 className="md:text-2xl text-1xl py-3 text-center font-medium">
        {name}
      </h3>
      <div className="md:flex justify-between items-center">
        <p>
          $<span className="md:text-2xl text-1xl font-medium">{price}</span>
        </p>

       
          <button
            className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
            onClick={() => {
              handleAddToCart();
              toast.success("Product successfully added to cart")
            }}
            
          >
            <img src={iconCart} alt="" className="w-5" />
            Add To Cart
          </button>
  

       
      </div>                              
    </div>
  );
};

export default ProductCart;

import React from "react";
import { logoDark, logoWhite } from "../assets";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const productData = useSelector((state) => state.khen.productData);
  console.log(productData);
  return (
    <div className=" w-full h-20 sticky top-0 z-50 bg-white border-b-[1px] border-b-gray-800 font-titleFont ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="ml-2 cursor-pointer ">
            <img className="w-28" src={logoWhite} alt="logoWhite " />
          </div>
        </Link>
        <div>
          <ul className="flex items-center gap-8 mr-3 ">
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300  underline-offset-2 rounded-full decoration-[1px] transition-all ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300  underline-offset-2 rounded-full decoration-[1px] transition-all ">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300  underline-offset-2 rounded-full decoration-[1px] transition-all ">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300  underline-offset-2 rounded-full decoration-[1px] transition-all ">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300  underline-offset-2 rounded-full decoration-[1px] transition-all ">
              Blogs
            </li>
            <div className="relative">
              <IconButton>
                <ShoppingCartIcon className=" text-orange-900" />
              </IconButton>
              <span className="absolute top-0 flex items-center right-2 -mr-2 mb-1 text-white bg-green-500 rounded-full h-5 px-1 cursor-pointer ">
                {productData.length}
              </span>
            </div>
            <IconButton>
              <Avatar src="a" />
            </IconButton>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

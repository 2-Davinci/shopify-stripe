import React from "react";
import { logoDark } from "../assets";
import { PayLogo } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img src={logoDark} alt="logoDark" className=" w-28" />
          <p className="text-white text-sm tracking-wide ">
            &copy;davinci-khen.com
          </p>
          <img
            src={PayLogo}
            alt="paymentLogo"
            className="w-56 cursor-pointer"
          />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4  cursor-pointer">
            Locate Us
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBD,Ruwi, Muscat-Oman</p>
            <p>Mobile: 07087561411</p>
            <p>Phone: 0810321698</p>
            <p>e-mail: olotudav@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="flex items-center flex-col">
            <h2 className="text-2xl font-semibold text-white mb-4  cursor-pointer">
              Profile
            </h2>
            <p className="flex items-center gap-3 cursor-pointer  hover:text-white ">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex  cursor-pointer   items-center gap-3 hover:text-white ">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex cursor-pointer   items-center gap-3 hover:text-white ">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex cursor-pointer   items-center gap-3 hover:text-white ">
              <span>
                <MdLocationOn />
              </span>
              Help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            className="bg-transparent border px-4 py-2 text-sm "
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:text-blaoiiiiii">
            SUbscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

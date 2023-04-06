import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4bb228120705693.60b70f428bd19.jpg",
    "https://th.bing.com/th/id/R.8b0e710ecb90e44b000d8a8a457c5db7?rik=QWMpV%2f%2bCN5boHg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.e854db931ddd3ec3e35aa381d5fe19d0?rik=CNbFjuqx8cnhGA&pid=ImgRaw&r=0",
    "https://i.pinimg.com/originals/18/57/c3/1857c3f70ce5b9a9e6be0244274809a2.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-90vw h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative overflow-x-hidden">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full  flex ">
          <img
            src={data[0]}
            alt="imageOne"
            className="w-screen h-full object-cover "
            loading="priority"
          />
          <img
            src={data[1]}
            alt="imageOne"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[2]}
            alt="imageOne"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[3]}
            alt="imageOne"
            className="w-screen h-full object-cover"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44  ">
          <div>
            <HiArrowLeft
              onClick={prevSlide}
              className="w-14  h-12 border-[1px] border-gray-700 flex items-center justify-center  hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300   "
            />
          </div>
          <div>
            <HiArrowRight
              onClick={nextSlide}
              className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

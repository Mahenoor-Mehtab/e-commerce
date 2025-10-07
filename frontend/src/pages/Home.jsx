import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import back5 from "../assets/back5.jpg";
import back3 from "../assets/back3.avif";
import back6 from "../assets/back6.jpg";
import back4 from "../assets/back4.avif";
import Product from "../pages/Product";
import OurPolicy from "../component/OurPolicy";
import NewLetterBox from "../component/NewLetterBox";
import Footer from "../component/Footer";

const slides = [
  { text1: "Welcome to OneCart", text2: "Shop your favorites!", image: back5 },
  { text1: "Latest Collections", text2: "Find your style!", image: back3 },
  { text1: "Deals & Discounts", text2: "Save more today!", image: back6 },
  { text1: "Fast Delivery", text2: "Right to your door!", image: back4 },
];

const HeroSlider = () => {
  const [heroCount, setHeroCount] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(prev => (prev + 1) % slides.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
   <>
    <div className="relative w-full h-screen text-white flex overflow-hidden ">
      
    
      <div className="w-1/2 flex flex-col justify-center px-8 md:px-16 z-10">
        <p className="text-[20px] md:text-[40px] lg:text-[55px] font-bold">{slides[heroCount].text1}</p>
        <p className="text-[14px] md:text-[20px] lg:text-[25px] mt-2">{slides[heroCount].text2}</p>

        <div className="flex items-center gap-3 mt-8">
          {slides.map((_, index) => (
            <FaCircle
              key={index}
              className={`w-4 h-4 ${heroCount === index ? "text-[#88d9ee]" : "text-gray-500"} cursor-pointer`}
              onClick={() => setHeroCount(index)}
            />
          ))}
        </div>
      </div>

    
      <div className="w-1/2 h-full relative">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="hero slide"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${heroCount === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
    <Product/>
    <OurPolicy/>
    <NewLetterBox/>
    <Footer/>
   </>

  );
};

export default HeroSlider;

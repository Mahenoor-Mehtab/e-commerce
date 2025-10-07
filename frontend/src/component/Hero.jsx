import React from "react";
import { FaCircle } from "react-icons/fa";

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  return (
    <div className="relative w-full h-screen text-white flex">
      
      {/* Left side:  */}
      <div className="w-1/2 flex flex-col justify-center px-8 md:px-16">
        <p className="text-[20px] md:text-[40px] lg:text-[55px] font-bold">{heroData.text1}</p>
        <p className="text-[14px] md:text-[20px] lg:text-[25px] mt-2">{heroData.text2}</p>

    
        <div className="flex items-center gap-3 mt-8">
          {[0,1,2,3].map((index) => (
            <FaCircle
              key={index}
              className={`w-4 h-4 ${heroCount === index ? "text-[#88d9ee]" : "text-gray-500"} cursor-pointer`}
              onClick={() => setHeroCount(index)}
            />
          ))}
        </div>
      </div>

      {/* Right side*/}
      <div className="w-1/2 h-full relative">
        
      </div>

    </div>
  );
};

export default Hero;

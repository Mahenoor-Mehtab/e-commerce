import React from "react";
import Titles from "../component/Titles";
import contact from "../assets/back1.avif";

const Contact = () => {
  const handleSubmit = (e)=>{
e.preventDefault();
  }
  return (
    <>
      <div className="w-[100vw] min-h-[100vh] flex flex-col items-center justify-start bg-gradient-to-r from-[#0c2025] to-[#141414] pt-[100px] pb-[80px] px-[20px]">
        {/* Page Title */}
        <Titles text1="CONTACT" text2="US" />

        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[900px] mt-[40px] gap-[30px] text-white">
          <img
            src={contact}
            alt="Contact"
            className="w-[60%] lg:w-[70%] rounded-2xl shadow-xl shadow-black"
          />

          {/* Store Info */}
          <div className="w-full text-center flex flex-col gap-[10px] mt-[20px]">
            <h3 className="text-[22px] lg:text-[26px] font-semibold text-[#aaf5fa]">
              Our Store
            </h3>
            <p className="text-gray-300">12345 Random Station</p>
            <p className="text-gray-300">Random City, State, India</p>

               <h3 className="text-[22px] lg:text-[26px] font-semibold text-[#aaf5fa]">
              Contact Info
            </h3>
            <p className="text-gray-300">Tel: +91-987654321</p>
            <p className="text-gray-300">Email: admin@onecart.com</p>
            <p className="text-gray-300">Working Hours: Mon–Sat, 10AM–8PM</p>
          </div>
          </div>

        

        {/* Contact Form*/}
        <div className="w-full max-w-[700px] mt-[60px] bg-[#112d32] bg-opacity-80 rounded-2xl shadow-lg shadow-black p-[30px] flex flex-col gap-[20px]">
          <h3 className="text-[22px] font-semibold text-[#aaf5fa] text-center">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
            <input
              type="text"
              placeholder="Your Name"
              className="p-[12px] rounded-md bg-[#1a3a3f] text-white outline-none focus:ring-2 focus:ring-[#aaf5fa]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-[12px] rounded-md bg-[#1a3a3f] text-white outline-none focus:ring-2 focus:ring-[#aaf5fa]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-[12px] rounded-md bg-[#1a3a3f] text-white outline-none resize-none focus:ring-2 focus:ring-[#aaf5fa]"
            ></textarea>

            <button
              type="submit"
              className="mt-[10px] bg-[#aaf5fa] text-[#0c2025] font-semibold py-[10px] rounded-md hover:bg-[#88e3e9] hover:scale-[1.03] transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

      
        <p className="text-gray-500 text-[14px] mt-[40px]">
          © 2025 OneCart. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Contact;

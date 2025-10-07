import React from 'react';
import logo from '../assets/vcart.png';

const Footer = () => {
  return (
    <>
      <div className="w-[99%] md:h-[36vh] h-[24vh] mb-[77px] md:mb-[0px] bg-[#eaf9f9] flex items-center justify-center md:px-[80px] px-[15px]">
      {/* Left section  */}
        <div className="md:w-[35%] w-[100%] h-[100%] flex flex-col items-start justify-center gap-[8px] text-gray-700">
          <div className="flex items-center justify-start gap-[8px]">
            <img
              src={logo}
              alt="OneCart Logo"
              className="md:w-[45px] md:h-[45px] w-[35px] h-[35px]"
            />
            <p className="text-[22px] font-bold text-gray-800">OneCart</p>
          </div>

          <p className="text-[14px] md:text-[15px] leading-tight hidden md:block">
            Your trusted online shopping hub — bringing you the latest fashion,
            electronics, and essentials at unbeatable prices. Shop smart, live
            better with <span className="font-semibold text-gray-900">OneCart</span>.
          </p>

          <p className="text-[14px] flex md:hidden">
            Shop smart. Live better. Only on OneCart.
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex w-[60%] h-[100%] items-center justify-evenly text-gray-700">
          <div className="flex flex-col gap-[6px]">
            <p className="font-semibold text-[16px] text-gray-800">Shop</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Men</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Women</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Kids</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Accessories</p>
          </div>

          <div className="flex flex-col gap-[6px]">
            <p className="font-semibold text-[16px] text-gray-800">Help</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Track Order</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Returns</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Support</p>
            <p className="text-[14px] hover:text-black cursor-pointer">FAQs</p>
          </div>

          <div className="flex flex-col gap-[6px]">
            <p className="font-semibold text-[16px] text-gray-800">Connect</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Instagram</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Facebook</p>
            <p className="text-[14px] hover:text-black cursor-pointer">Twitter</p>
            <p className="text-[14px] hover:text-black cursor-pointer">YouTube</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-gray-800 text-gray-300 text-center text-[13px] py-[10px]">
        © 2025 OneCart — All Rights Reserved | Built for Smart Shoppers 🛒
      </div>
    </>
  );
};

export default Footer;

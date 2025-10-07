import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-gradient-to-r from-[#0c2025] to-[#141414] text-white text-center gap-[20px]">
      <h1 className="text-[80px] font-bold text-[#aaf5fa]">404</h1>
      <p className="text-[20px] text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-[20px] bg-[#aaf5fa] text-[#0c2025] px-[20px] py-[10px] rounded-md font-semibold hover:bg-[#88e3e9] transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

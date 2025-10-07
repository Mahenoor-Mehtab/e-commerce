import React from 'react'
import { FaPlusCircle, FaList, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <>
       <div className="w-[220px] h-screen bg-[#0b1c20] text-white flex flex-col p-4 border-r border-gray-700">
      {/* Logo */}
      <h1 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
          alt="Logo"
          className="w-6 h-6"
        />
        OneCart
      </h1>

      {/* Sidebar Menu */}
      <div className="flex flex-col gap-3">
        {/* Add Items */}
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-600 rounded hover:bg-gray-800" onClick={()=> navigate('/add')}>
          <FaPlusCircle size={18} />
          Add Items
        </button>

        {/* List Items */}
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-600 rounded hover:bg-gray-800" onClick={()=> navigate('/lists')}>
          <FaList size={18} />
          List Items
        </button>

        {/* View Orders */}
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-600 rounded hover:bg-gray-800" onClick={()=> navigate('/orders')}>
          <FaShoppingCart size={18} />
          View Orders
        </button>
      </div>
    </div>
    </>
  )
}

export default SideBar
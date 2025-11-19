import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoSearchCircleOutline, IoPersonCircleOutline, IoCartOutline } from "react-icons/io5";
import { userDataContext } from '../context/UserContext';
import axios from 'axios';
import { authDataContext } from '../context/authContext';
import { FaHome } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { shopDataContext } from '../context/ShopContext';


const Nav = () => {
  const { userData ,getCurrentUser } = useContext(userDataContext);
  const {serverUrl} = useContext(authDataContext);
  const {showSearch, setShowSearch , search , setSearch , getCartCount} = useContext(shopDataContext)
  const [showProfile , setShowProfile] = useState(false);
  const navigate = useNavigate();


//! logout:
const handleLogOut = async ()=>{
  try{
   const result =  await  axios.get(serverUrl+'/api/auth/logOut' , {withCredentials:true});

    getCurrentUser();
    // navigate("/login")
  }catch(error){
console.log(error);
  }
}

  return (
    <div className="w-[100vw] h-[70px] bg-gradient-to-b from-[#141414] to-[#0c2025] text-white z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">

      {/* Left:  */}
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]">
        <img
          src="https://imgs.search.brave.com/nXo8FNCynTGMsn4qgDa0CVStKIkyAkWlwzbeJ4ZF1AA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2Lzdm/L2NiLzM2N2ZjYmM2/YzM4YTM1OTUzYmZk/M2FiZWY0OTBkNjFk/LmpwZw"
          className="w-[40px]"
          alt="Logo"
        />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

 
      <div className="w-[50%] lg:w-[40%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-white">
         
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=> navigate('/')}>HOME</li>
         
         
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=> navigate("/collection")}>COLLECTIONS</li>
        
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=> navigate("/about")}>ABOUT</li>
       
    
            <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl" onClick={()=>navigate("/contact")}>CONTACT</li>
       
          
        </ul>
      </div>

      {/* Right */}
      <div className="w-[30%] flex items-center justify-end gap-[20px] mr-7">
        <IoSearchCircleOutline className="w-[30px] h-[30px] cursor-pointer" onClick={()=> {setShowSearch((prev)=>(!prev) ); navigate('/collection')}} />

        {!userData && (
          <IoPersonCircleOutline className="w-[30px] h-[30px] cursor-pointer" onClick={()=>
          setShowProfile(prev => !prev)
          } />
        )}

        {userData && (
          <div className="w-[30px] h-[30px] bg-zinc-600 text-white rounded-full flex items-center justify-center cursor-pointer" onClick={()=>
          setShowProfile(prev => !prev)
          }>
            {userData?.name.slice(0, 1)}
          </div>
        )}

        <IoCartOutline className="w-[30px] h-[30px] cursor-pointer hidden md:block" onClick={()=> navigate('/cart')} />

        <p className='absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[10px] top-[10px] right-23px] hidden md:block border-white border-2 font-extrabold '>{getCartCount()}

        </p>
      </div>

    { showSearch &&  <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center z-10'>
<input type="text" className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]' placeholder='Serach here' onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
     </div>

    }

   { showProfile &&  <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-30'>
   <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white'>
    { (!userData) &&
       <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' 
      onClick={()=>{
        navigate('/login') ; setShowProfile(false);
      }}
       >Login</li> }
  {(userData) &&     
      <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'
      onClick={()=>{
       handleLogOut(); setShowProfile(false);

      }}
      >Log out </li>}
      <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer'onClick={()=> navigate('/order')} >Orders</li>
      <li className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer' onClick={()=> navigate('/about')}>About</li>
   </ul>
    
    </div>

   }
   <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden text-[12px]'>
   <button className='text-[white] flex items-center  justify-center flex-col gap-[2px] '>
<FaHome className="w-[20px] h-[20px] cursor-pointer"
onClick={()=> navigate('/')}/> Home  </button>
 <button className='text-[white] flex items-center  justify-center flex-col gap-[2px] '>
<BsCollection className="w-[20px] h-[20px] cursor-pointer" onClick={()=> navigate('/collection')} />Collections </button>

 <button className='text-[white] flex items-center  justify-center flex-col gap-[2px] '>
<IoMdContact className="w-[20px] h-[20px] cursor-pointer" onClick={()=> navigate('/contact')}/>Contact </button>

{/* Cart button*/}
  <button
    className='relative text-white flex items-center justify-center flex-col gap-[2px]'
    onClick={() => navigate('/cart')}
  >
    <IoCartOutline className="w-[20px] h-[20px] cursor-pointer" onClick={()=> navigate('/cart')} />
    Cart

    {/* Badge: absolute relative to this button */}
    <span className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] flex items-center justify-center bg-white text-black rounded-full text-[9px] border-white border-2 font-extrabold'>
      {getCartCount()}
    </span>
  </button>


   </div>

    </div>
  );
};

export default Nav;

import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authDataContext } from '../context/Authcontext'
import { adminDataContext } from '../context/AdminContext'

const Nav = () => {
  const navigate = useNavigate();
  const  { serverUrl} = useContext(authDataContext);
  const {getAdmin} = useContext(adminDataContext)
 
  const handleLogOut = async ()=>{
 try{
   const res=  await axios.get(serverUrl+"/api/auth/logOut" , {withCredentials:true});
    // ⭐ Verify karne ke liye ki logout successful tha
    getAdmin(); // Yeh false return karega agar logout success
  navigate('/login')
  // console.log("logout response",res);

 }catch(error){
  console.log({message:`error mesages are:${error}`});
 }
  }

  // useEffect(()=>{
  //  handleLogOut()
  // },[])

  return (
    <div className="w-[100vw] h-[70px] bg-gradient-to-b from-[#141414] to-[#0c2025] text-white z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">

    
 
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]">
        <img
          src="https://imgs.search.brave.com/nXo8FNCynTGMsn4qgDa0CVStKIkyAkWlwzbeJ4ZF1AA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2Lzdm/L2NiLzM2N2ZjYmM2/YzM4YTM1OTUzYmZk/M2FiZWY0OTBkNjFk/LmpwZw"
          className="w-[40px]"
          alt="Logo"
        />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      <button className='text-[15px] hover:border-[2opx] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white ' onClick={handleLogOut}>Logout</button>

     
  
    
    </div>
  )
}

export default Nav
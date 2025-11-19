import React from 'react'
import { SiEbox } from "react-icons/si";
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/Authcontext'
import axios from 'axios'
import { useEffect } from 'react'

const Orders = () => {
  const [orders , setOrders] = useState([]);
  let {serverUrl} = useContext(authDataContext);
  const fetchAllOrders = async ()=>{
    try{
      const result = await axios.post(serverUrl + '/api/order/list' , {}, {withCredentials:true}
      )
      setOrders(result.data.reverse())

    }catch(error){
console.log(error);
    }
  }

  useEffect(()=>{
fetchAllOrders();
  },[])


  return (
    <>
     <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]'>
      <Nav/>
      <div className='w-[100%] h-[100%] flex items-center lg:justify-start justify-center '>
        {/* <SideBar/> */}
        <div className='lg:w-[85%] md:w-[70%] h-[100%] lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]'>
          <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white'>All Orders List

          </div>
          {
 orders.map((order , index)=>(
  <div key={index} className='w-[90%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px]'>
    <SiEbox className='w-[60px] h-[60px] text-[black] p-[5px] rounded-lg bg-[white'/>

<div>
  <div className='flex items-start justify-center flex-col gap-[5px] text-[16px] text-[#56dbfc]'>
    {
      order.items.map((item , index)=>{
        

      })
    }

  </div>

</div>

    </div>
 ))


          }

        </div>

      </div>

     </div>
    </>
  )
}

export default Orders
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { authDataContext } from '../context/Authcontext';
import axios from 'axios';
import { useEffect } from 'react';
import { MdDelete } from "react-icons/md";

const Lists = () => {
  let [list, setLists] = useState([]);
  let { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/product/listproduct", { withCredentials: true })
      // console.log(result.data);
      setLists(result.data)
    } catch (error) {
      console.log("list error:", error);
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  const removeList = async(id)=>{
    try{
      const result = await axios.post(`${serverUrl}/api/product/remove/${id}` , {} , {withCredentials:true })
      console.log("result remove:", result);
console.log(result.data);
      if(result.data){
        fetchList();
      }
      else{
        console.log("failed remove product ");
      }

    }catch(error){
      console.log("remove product error:",error);

    }
  }


  return (
    <>
      <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white overflow-x-hidden relative '>

        <div className='w-[100%] h-[100%] flex items-center justify-start'>
          {/* <SideBar/>
   */}
          <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px] '>

            <div className='w-[400px] h-[50px] text-[20px] md:text-[40px] mb-[20px] text-white '>All Listed Products </div>
            {
              list?.length > 0 ? (
                list.map((item, index) => (
                  <div className='w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px] ' key={index}>

                    <img src={item.image1} className='w-[30%] md:w-[120px] h-[90%] rounded-lg ' alt="" />

                    <div className='w-[90%] h-[88%] flex flex-col items-start justify-center gap-[2px] text-[#bef0f3] px-[10px]'>
                      <div className='w-[100%] md:text-[20px] text-[15px] '>{item.name} </div>
                      <div className='md:text-[17px] text-[15px] '>{item.category}</div>
                      <div className='md:text-[17px] text-[15px] '>Rs. {item.price}</div>
                      

                    </div>
                    <div className='w-[10%] h-[100%] bg-transparent flex items-center justify-center'>
                        <span className='w-[35px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-red-300 md:hover:text-black cursor-pointer hover:text-red-300 text-[20px]' onClick={()=>removeList(item._id) }>
                          <MdDelete/>
                        </span>

                      </div>
                  </div>

                ))

              )
                : (
                  <div className='text-white text-lg '>No product </div>
                )
            }

          </div>


        </div>
      </div>

    </>
  )
}

export default Lists
import React from 'react'
import Titles from '../component/Titles'
import { useState } from 'react'
import CartTotal from '../component/cartTotal'
import razorpay from '../assets/razorpay.webp'
import { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/authContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  let [method , setMethod] = useState('cod')
  const {cartItem , setCartItem , getCartAmount , delivery_fee , products} = useContext(shopDataContext);
  const navigate = useNavigate();
  let {serverUrl } = useContext(authDataContext);
  let [formData , setFormData] = useState({
    firstName:'' , lastName:'', email:'',street:'', city:'' , state:'' , pincode:'' , country:'', phone:''
  })

  const onChangeHandler = async (e)=>  {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data =>( {...data, [name]:value}))

  }

  const onSubmitHandler = async (e)=>{
      e.preventDefault();
try{
let orderItems=[];
for(const items in cartItem ){
  for(const item in cartItem[items]){
    if(cartItem[items][item] > 0){
      const itemInfo = structuredClone(products.find(product => product._id === items))
      if(itemInfo){
        itemInfo.size = item
        itemInfo.quantity = cartItem[items][item]
        orderItems.push(itemInfo)
      }
    }
  }

 
}
console.log("order item",orderItems);

 let orderData = {
    address:formData,
    item:orderItems,
    amount:getCartAmount() + delivery_fee
  }
 
  switch(method){
    case 'cod': 
    const result = await axios.post(serverUrl + '/api/order/placeorder' , orderData, {withCredentials: true})

    if(result.data){
      setCartItem({});
      navigate('/order')
    }else{
      console.log(result.data.message);
    }
  
    break;

      default: break;
  }



}catch(error){
  console.log("place order errors:",error);
}
    }



  return (
    <>
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col md:flex-row gap-[20px] relative'>
      <div className='lg:w-[50%] w-[100%] h-[100%] flex flex-col md:flex-row items-center justify-center lg:mt-[0px] mt-[90px] '>
       <form action="" onSubmit={onSubmitHandler} className="lg:w-[70%] w-[95%] lg:h-[70%] h-[100%] md:py-[10px] pb-[100px] ">
          <div className='py-[10px] '>
            <Titles text1={'DELIVERY'}  text2={"      INFORMATION"} />

          </div>
          <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
           <input type="text" className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='First name' onChange={onChangeHandler} name="firstName" value={formData.firstName}/>

            <input type="text" className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='Last name'  onChange={onChangeHandler} name="lastName" value={formData.lastName}/>

          </div>

           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
           <input type="email" className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='Email adress'  onChange={onChangeHandler} name="email" value={formData.email}/>
   </div>

     <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
           <input type="type" className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='Street'  onChange={onChangeHandler} name="street" value={formData.street}/>
   </div>

     <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
           <input type="text" className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='City'  onChange={onChangeHandler} name="city" value={formData.city}/>

            <input type="text" className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='State'
              onChange={onChangeHandler} name="state" value={formData.state}/>

          </div>
            <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
           <input type="number" className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='Pincode'  onChange={onChangeHandler} name="pincode" value={formData.pincode}/>

            <input type="text" className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='Country' onChange={onChangeHandler} name="country" value={formData.country}/>

          </div>

           <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
           <input type="number" className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-gray-400 text-[18px] px-[20px] shadow-sm shadow-[#343434]  text-white ' required placeholder='Phone '  onChange={onChangeHandler} name="phone" value={formData.phone}/>
   </div>
   <div className='w-[100%] mt-6 flex justify-center lg:justify-end'>


 <button type='submit' className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%] border-[1px] border-[#80808049] ml-[20px]' onClick={()=> navigate('/order')}>PLACE ORDER</button>


</div>
     </form>

    

      </div>
       <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]'>
      <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col'>
        <CartTotal/>
        
        <div className='py-[10px]'>
          <Titles text1={'PAYMENT'} text2={'METHOD'}/>

        </div>
        <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px] mb-10 '>

          <button onClick={()=> setMethod('razorpay')}
            className={`w-[150px] h-[50px] rounded-sm ${method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm' :''}`}>
              <img src={razorpay} alt="" className= 'w-[100%] h-[100%] object-fill rounded-sm ' 
              />

                 </button>
              <button onClick={()=> setMethod('cod') 
              } className= {`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-white text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm':''}`}>   CASH ON DELIVERY</button>
            

         
       

        </div>

      </div>

     </div>

    </div>

    
    
    </>
  )
}

export default PlaceOrder

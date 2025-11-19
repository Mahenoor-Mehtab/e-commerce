import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Titles from '../component/Titles'
import { shopDataContext } from '../context/ShopContext'
import { MdDelete } from "react-icons/md";
import CartTotal from '../component/cartTotal';

const Cart = () => {
  const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    if (!cartItem) {
      setCartData([]);
      return;
    }

    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItem])

  return (
    <div className='min-h-screen w-full p-5 bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      <div className='max-w-6xl mx-auto mt-20'>
        <div className='text-center mb-6'>
          <Titles text1={'YOUR'} text2={'CART'} />
        </div>

        <div className='flex flex-col gap-4'>
          {cartData.length === 0 && (
            <p className='text-center text-white/80'>Your cart is empty.</p>
          )}

          {cartData.map((item) => {
            const productData = products.find((p) => p._id === item._id);

            return (
              <div
                key={item._id + '-' + item.size}
                className='w-full bg-[#0f2a2e]/40 rounded-2xl border border-[#274f50] p-4 flex items-center gap-4'
              >
                <div className='flex-shrink-0'>
                  <img
                    src={productData?.image1}
                    alt={productData?.name || 'product'}
                    className='w-20 h-20 md:w-24 md:h-24 object-cover rounded-md border border-[#2e6b6a]'
                  />
                </div>

                <div className='flex-1 min-w-0'>
                  <p className='text-[18px] md:text-[20px] text-[#f3f9fc] truncate'>
                    {productData?.name || 'Loading...'}
                  </p>

                  <div className='flex items-center gap-4 mt-2'>
                    <p className='text-[16px] text-[#aaf4e7]'>
                      {currency} {productData?.price ?? '--'}
                    </p>

                    <div className='px-3 py-1 bg-[#518080b4] rounded-md border border-[#9ff9f9] text-white text-sm'>
                      {item.size}
                    </div>
                   

                   
                    <div className='ml-auto flex items-center gap-2 justify-center mr-10'>
                      <button
                        onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                        className='w-8 h-8 flex items-center justify-center rounded bg-[#1f6a66] text-white'
                      >
                        −
                      </button>
                      <div className='px-3 text-white'>{item.quantity}</div>
                      <button
                        onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                        className='w-8 h-8 flex items-center justify-center rounded bg-[#1f6a66] text-white'
                      >
                        +
                      </button>
                    
                    </div>
                      <div>
                        <MdDelete  className='text-[#9ff9f9] w-[25px] h-[25px] justify-center md:top-[40%] md:right-[5%] right-1' onClick={()=> updateQuantity(item._id, item.size , 0)}/>
                    </div>


                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex justify-start items-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <button className='text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] ml-[30px] mt-[20px]' onClick={()=>{
              if(cartData.length > 0){
                navigate('/placeOrder')
              }
              else{
                alert("Your cart is empty")
              }
              
              }}>
PROCEED TO CHECKOUT
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart

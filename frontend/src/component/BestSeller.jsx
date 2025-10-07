import React, { useContext, useEffect, useState } from 'react'
import Titles from './Titles'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card';

const BestSeller = () => {
  let {products} = useContext(shopDataContext);
  let [bestSeller , setBestSeller] = useState([]);
  // console.log(" producxt", products);
  useEffect(()=>{
let filterProduct = products.filter((item) => item.bestseller);

setBestSeller(filterProduct.slice(0,4));
  },[products])
  
  
  return (
    <>
      <div className='h-[8%] w-[100%] text-center mt-[50px] '>
        <Titles text1={"BEST"} text2={"SELLER"} />
        <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>
          Tried , Tested , Loved ,Discover Our ALL-TIME Best Sellers

        </p>
      </div>
      <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>{
        bestSeller.map((item, index)=>(
          <Card name={item.name} key={index} id={item._id} price={item.price} image={item.image1} />
        ))
        }

      </div>

    </>
  )
}

export default BestSeller
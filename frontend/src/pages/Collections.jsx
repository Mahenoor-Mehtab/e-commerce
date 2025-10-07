import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Titles from "../component/Titles"
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';

const Collections = () => {
   let [showFilter , setShowFilter] = useState(false);
let {products , search , showSearch} = useContext(shopDataContext);
let [filterProduct , setFilterProduct] = useState([])
let [category , setCategory] = useState([]);
let [subCategory , setSubCategory] = useState([]);
let  [sortType , setSortType] = useState("relevant");

// basically yaha par ye ho raha ki jo seleted h uspe user click karna h to usko item ko remove kar do aur nhi h usko add kar do 
const toggleCategory = (e)=>{
  if(category.includes(e.target.value)){
    setCategory(prev => prev.filter(item => item !== e.target.value))
  }else{
    setCategory(prev => [...prev , e.target.value])
  }
}

const toggleSubCategory = (e)=>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev => prev.filter(item => item !== e.target.value))
  }else{
    setSubCategory(prev => [...prev , e.target.value])
  }
}


const applyFilter = ()=>{
  let productCopy= products.slice();

  if(showSearch && search) {
    productCopy = productCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(category.length >0){
    // yaha basically mtlb ye ki men ki filter wha karega jisko wah chahe ga jaise kya hota ek mens wali product copy banat h aur ek women aise hi kitni banayega alag alag 
    productCopy = productCopy.filter(item => category.includes(item.category))
  }
   if(subCategory.length >0){
    
    productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
  }
  // console.log("product copy:", productCopy);

  setFilterProduct(productCopy)
}

//! sort according to price:
const sortProducts = ()=>{
  let fbCopy = filterProduct.slice();

  switch(sortType){
    case 'low-high':
      setFilterProduct(fbCopy.sort((a,b)=>(a.price - b.price)));
      break;
    
    case 'high-low':
      setFilterProduct(fbCopy.sort((a,b)=>(b.price - a.price) ))
      break;
    default:
      applyFilter();
      break;
  }
}

// //! search:
// const searchProduct = ()=>{
//   const searchElement = filterProduct.filter(item =>
//     item.name.toLowerCase.includes(search.toLowerCase)
//   )
//   return searchElement
// }


useEffect(()=>{
  sortProducts()
},[sortType])


useEffect(()=>{
  setFilterProduct(products)
},[products])

useEffect(()=>{
  applyFilter()
},[category,subCategory , search , showSearch])


  return (
    <>
      <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-startflex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]
      pb-[100px] '>
        <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px] border-r[1px] border-gray-400 text-[#aaf5fa] lg:fixed ${showFilter ? "h-[45vh]" : "h-[8vh]"}`} >
          <p className='text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer' onClick={()=> setShowFilter(prev => !prev)}> FILTERS 
       { !showFilter && <FaChevronRight className='text-[18px] md:hidden' />}
       {showFilter && <FaChevronDown className='text-[18px] md:hidden'  />}

          </p>
          <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`} >
            <p className='text-[18px] text-[#f8fafa]'>CATEGORIES

            </p>
            <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
              <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Men'} className='w-3'onChange={toggleCategory} />
                Men
              </p>
              <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Women'} className='w-3'onChange={toggleCategory} />
                Women
              </p>
              <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'Kids'} className='w-3' onChange={toggleCategory} />
                Kids
              </p>

            </div>
          </div>

           <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`} >
            <p className='text-[18px] text-[#f8fafa]'> SUB-CATEGORIES

            </p>
            <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
              <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'TopWear'} className='w-3' onChange={toggleSubCategory} />
               Top Wear
              </p>
              <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'BottomWear'} className='w-3' onChange={toggleSubCategory}  />
                Bottom Wear
              </p>
              <p className='flex items-center justify-center gap-[10px] text-[16px] font-light'> <input type="checkbox" value={'WinterWear'} className='w-3' onChange={toggleSubCategory}  />
              Winter Wear
              </p>

            </div>
          </div>

        </div>
        <div className='lg:pl-[20%] md:py-[10px] '>
          <div className='md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]'>
<Titles text1={"ALL"} text2={"COLLECTIONS"} />
<select name="" id="" className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]' onChange={(e)=> setSortType(e.target.value)}>
<option value="relevant" className='w-[100%] h-[100%]'>Sort By: Relevant</option>
<option value="low-high" className='w-[100%] h-[100%]'>Sort By: Low to High</option>
<option value="high-low" className='w-[100%] h-[100%]'>Sort By: High to Low</option>

</select>
          </div>

          <div className='lg-w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
            {

filterProduct.map((item , index)=>(
  <Card key={index} id={item._id} name={item.name} price={item.price}  image={item.image1}/>
))
            }

          </div>

        </div>

      </div>
    </>
  )
}

export default Collections
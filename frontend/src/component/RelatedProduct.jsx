import React, { useContext, useState , useEffect } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Titles from './Titles'
import Card from './Card'

const RelatedProduct = ({category, subCategory, currentProductId}) => {
    let {products} = useContext(shopDataContext)
    let [related , setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item)=> category === item.category)
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
            productsCopy = productsCopy.filter((item)=> currentProductId !== item._id)
            console.log("productCopy:", productsCopy);
            setRelated(productsCopy.slice(0,4))
        }
    },[products,category, subCategory, currentProductId])
    console.log(related);

      if (!Array.isArray(products) || products.length === 0) {
      console.log('no products yet')
      setRelated([])
      return
    }

  return (
    <div className='my-[130px] md:my-[40px] md:px-[60px] '>
        <h2>helloo</h2>
        <div className='ml-[20px] lg:ml-[80px] '>
            <Titles text1={'RELATED'} text2={"PRODUCT"}/>
                
        </div>
        <div className='w-[100%] h-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>{
         related.map(item => (
  <Card key={item._id} id={item._id} name={item.name} image={item.image1} price={item.price} />
))
           
        }

        </div>

        

    </div>
  )
}

export default RelatedProduct
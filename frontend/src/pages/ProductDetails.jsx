import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import RelatedProduct from '../component/RelatedProduct';


const ProductDetails = () => {
    const { productId } = useParams();
    const { products, currency , addtoCart} = useContext(shopDataContext);
    let [productData, setProductData] = useState(false);

    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                // console.log(products);
                setImage1(item.image1);
                setImage2(item.image2);
                setImage3(item.image3);
                setImage4(item.image4);
                setImage(item.image1);
                setSize(item.size)
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [productId, products])
    if (!productData) {
        return <h1> No product </h1>
    }

    return (
        <>
            <div >
                <div className='w-[99vw] h-full md:h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col lg:flex-row gap-[20px] '>
                    {/* left side */}
                    <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap:[30px] flex-col-reverse lg:flex-row'>

                        {/* collection of image  */}
                        <div className='lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[10px] lg:flex-col flex-wrap'>

                            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-30 border-[1px] border-[#80808049] rounded-md'>
                                <img src={image1} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setImage(image1)} />
                            </div>

                            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-30 border-[1px] border-[#80808049] rounded-md'>
                                <img src={image2} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setImage(image2)} />
                            </div>

                            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-30 border-[1px] border-[#80808049] rounded-md'>
                                <img src={image3} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setImage(image3)} />
                            </div>

                            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-30 border-[1px] border-[#80808049] rounded-md'>
                                <img src={image4} alt="" className='w-[100%] h-[100%] cursor-pointer rounded-md' onClick={() => setImage(image4)} />
                            </div>




                        </div>
                        {/* main image */}
                        <div className='lg:w-[60%] w-[80%] lg:h-[78%]h-[70%] border-[1px] border-[#80808040] rounded-md overflow-hidden'>
                            <img src={image} alt="main-img" className='w-[100%] lg-h-[90%] h-[100%]
            text-[30px] text-white text-center rounded-md object-fill' />


                        </div>




                    </div>

                    {/* right side */}
                    <div className='lg:w-[50vw] w-100vw] lg:h-[75vh] h-[40vh]  mt-[40px] lg:mt-[20px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]'>
                        <h1 className='text-[40px] font-semibold text-[aliceblue]'> {productData.name.toUpperCase()}</h1>
                        <div className='flex item-center gap-1'>

                            <IoStar className='text-[20px] fill-[#FFD700]' />

                            <IoStar className='text-[20px] fill-[#FFD700]' />

                            <IoStar className='text-[20px] fill-[#FFD700]' />

                            <IoStar className='text-[20px] fill-[#FFD700]' />
                            <IoStarHalf className='text-[20px] fill-[#FFD700]' />
                            <p className='text-[16px] font-semibold pl-[5px] text-[white] text-center justify-center '>(124)</p>

                        </div>

                        <p className='text-[30px] font-semibold
        pl-[5px] text-[white]'>{currency} {productData.price}

                        </p>

                        <p className='w-[80%] md:w-[60%] text-[17px]  pl-[5px] text-white pt-2'> {productData.description} Stay comfortable all year round with our Summer & Winter Mixed Sea Cloth. Perfect for both warm and chilly days, this versatile fabric combines breathability for summer and soft warmth for winter, making it ideal for every season. Lightweight yet cozy.

                        </p>

                        <div className='flex flex-col gap-[10px] my-[10px] '>
                            <p className='text-[25px] font-semibold pl-[5px] text-white'>Select Size</p>
                            <div className='flex gap-2'>
                                {

                                    productData.sizes.map((item, index) => (
                                        <button key={index} className={`border py-2 px-4 bg-slate-300 rounded-md ${item === size ? 'bg-black text-[#2f97f1] text-[20px]transition-all' : ""}`} onClick={() => setSize(item)}>{item}</button>
                                    ))
                                }

                            </div>
                            <button className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black' onClick={()=>addtoCart(productData._id , size)}>
                                Add To Cart

                            </button>

                        </div>
                        <div className='w-[90%] h-[1px] bg-slate-700'></div>
                        <div className='w-[80%] text-[16px] text-white '>
                            <p>100% Original Product</p>
                            <p>Cash on delivery is avaible on this product</p>
                            <p>East return and exchange policy within 7 days</p>

                        </div>




                    </div>


                </div>
                {/* <div className=' w-[100%] min-h-[70vh] bg-gradient-to-l from-[#1414114] to-[#30c2025] flex items-start justify-start flex-col overflow-x-hidden'>
                    <div className='flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]'>
                        <p className='border px-5 py-3 text-sm text-white'>
                            Description
                        </p>
                        <p className='border px-5 py-3 text-sm text-white'>
                            Reviews (124)
                        </p>
                    </div>
                    <div
                        className="
                        w-[80%] md:h-[150px]   h-[220px]  bg-[#3336397c]  border    text-white 
    text-[13px]    lg:text-[20px]  px-[10px]    ml-[20px]   flex   items-center    justify-center
  " >
                        Upgrade your wardrobe with this stylish slim-fit cotton
                        shirt, available now on OneCart. Crafted from breathable,
                        high-quality fabric, it offers all-day comfort and
                        effortless style. Easy to maintain and perfect for any
                        setting, this shirt is a must-have essential for those who
                        value both fashion and function.
                    </div>

                    <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id} />


                </div> */}


            </div>


        </>
    )
}

export default ProductDetails
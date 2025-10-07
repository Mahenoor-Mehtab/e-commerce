import uploadCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js"

//! ADD PRODUCT
export const addproduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, bestseller, sizes } = req.body;

    //  console.log(req.files);

    let image1 = await uploadCloudinary(req.files.image1[0].path);

    let image2 = await uploadCloudinary(req.files.image2[0].path);

    let image3 = await uploadCloudinary(req.files.image3[0].path);

    let image4 = await uploadCloudinary(req.files.image4[0].path);
    //  console.log("image4:", image4);
    //  console.log("image4 url:", image4.secure_url);

    let productData = {
      name,
      description,
      price: Number(price),
      category,
      price,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      // bestseller: bestseller === "true" ? true : false,
      bestseller: Boolean(bestseller),
      date: Date.now(),
      image1,
      image2,
      image3,
      image4
    };
    //  console.log("produast data" , productData);
    const product = await Product.create(productData)
    return res.status(201).json(product)

  } catch (error) {
    console.log("addproduct error");
    return res.status(500).json({ message: `Add product  error ${error}` })

  }
}


//! LIST PRODUCT
export const listProduct = async (req, res) => {
  
try{
    const item = await Product.find();
  // console.log(item);
  res.status(200).json(item);

}catch(error){
 console.log("list product error");
    return res.status(500).json({ message: `List product  error ${error}` })
}}


//! REMOVE PRODUCT:
export const removeProduct = async (req , res)=>{
 try{
   const {id} = req.params;
   console.log("remove id",id);
  const rem = await Product.findByIdAndDelete(id);
  res.status(200).json(rem);

 }
 catch(error){
  console.log("remove product error");
  return res.status(500).json({ message: `Remove product  error ${error}` })
 }
}
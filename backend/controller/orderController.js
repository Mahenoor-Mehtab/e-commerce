import Order from "../model/order.Model.js";
import user from '../model/user.model.js'

//! FOR USER: placeOrder
export const placeOrder = async (req , res)=>{
try{
   const {item, amount , address} = req.body;
   const userId = req.userId;
   const orderData = {
    item, amount, userId , address, paymentMethod: 'COD', payment: false , date: Date.now()
   }
   const newOrder = new Order(orderData)
   await newOrder.save();

//    after ordering data then remove the data from the cartdata
   await user.findByIdAndUpdate(userId, {cartData:{}})

   return res.status(201).json({message:"Order place"})
}catch(error){
    console.log(error);
    res.status(500).json({message:"Order place error"})


}
}


export const userOrder = async (req , res )=>{
   try{
      const userId = req.userId;
      const orders = await Order.find({userId});
      return res.status(200).json(orders)

   }catch(error){
      console.log(error);
      return res.status(500).json({message:"userOrders error"})

   }
}

//! FOR ADMIN:
export const allOrders = async (req , res) =>{
   try{
      const orders = await Order.find({})
      res.status(200).json(orders)

   }catch(error){
      console.log(error);
      return res.status(500).json({message:"adminAll Orders error"})
   }
}

export const updateStatus = async (req , res)=>{
   try{
 const {orderId , status} = req.body;
await Order.findByIdAndUpdate(orderId, {status})
return res.status(201).json({message:"Status Updated"})

   }catch(error){
      return res.status(500).json({message: error.message})

   }
}
import express from "express"
import { addtoCart, getUserCart, updateCart } from "../controller/cartController.js";
import isAuth from "../middleware/isAuth.js";
const cartRoute = express.Router();

cartRoute.post('/get',isAuth , getUserCart);
cartRoute.post('/add', isAuth, addtoCart);
cartRoute.post('/update', isAuth , updateCart);

export default cartRoute


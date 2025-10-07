import express from "express"
import { getCurrentUser} from '../controller/userController.js'
import isAuth from "../middleware/isAuth.js";
import adminAuth from '../middleware/adminAuth.js'
import { getAdmin } from "../controller/adminController.js";
const userRoutes = express.Router();


//! this is user route :
// where we do authentication karte h jisske jo user hota usko verify karte h uske bad hum getcurrent use ki accesubilty frointend ke form me confirm karte h acces kar chijo ke liye dene ke liye
userRoutes.get("/getcurrentuser" ,  isAuth, getCurrentUser);
userRoutes.get("/getAdmin" , adminAuth , getAdmin);

export default userRoutes;


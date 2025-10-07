import express from "express";
const authRoutes = express.Router();
import { registration , login , logOut , googleLogin , adminLogin} from "../controller/authController.js";

authRoutes.post('/register', registration  )
authRoutes.post('/login', login )
authRoutes.post('/googlelogin',googleLogin)
authRoutes.get('/logOut', logOut  );

authRoutes.post('/adminlogin',adminLogin )

export default authRoutes;
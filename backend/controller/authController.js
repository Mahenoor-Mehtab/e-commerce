import userModel from "../model/user.model.js"
import genToken, { genToken1 } from "../config/token.js";
import validator from "validator";
import bcrypt from "bcrypt";

//! Register controller
export const  registration  = async (req, res) => {
  try {
    const { name, email, password} = req.body;
    const existUser = await userModel.findOne({ email });
    if (existUser)
      return res.status(400).json({ message: "user already  exits" });

     if(!validator.isEmail(email)){
        return res.status(400).json({ message: "Enter valid email" }); }

     if (password.length < 8)
      return res.status(400).json({ message: "password must be atleat 6 character" });


    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
    name,
      email,
      password: hashPassword,
    });

    const token = genToken(user._id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(`Error message: ${error.message}`);
  }
};


//! Login controller
export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json("user not regitered");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("password incorrect");

    const token = genToken(user._id);
    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json("login succesfully");
  } catch (error) {
    return res.status(500).json(`Error message: ${error.message}`);
  }
};

//! googleLogin:
export const googleLogin = async (req , res)=>{
  try{
    const {name , email} = req.body;
    console.log(name , email);
  let user = await userModel.findOne({email});

    if(!user){
      user = await userModel.create({name , email});
    }

     const token = genToken(user._id);
    // console.log("token get:", token);
    res.cookie("token", token, {
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json("login succesfully");

  }catch(error){
     return res.status(500).json(`Error message: ${error.message}`);

  }
}

//! log Out:
export const logOut = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,       // HTTPS use kar rahe ho toh true karo
      sameSite: "strict",
    });
    res.status(200).json("logout succesfully");
  } catch (error) {
    res.status(500).json(`Error message: ${error.message}`);
  }
};


//! ADMIN login
export const adminLogin = async (req , res)=>{
  try{

    const {email , password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
      let token = genToken1(email);
   
      res.cookie("token" , token ,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge: 1*24*60*60*1000
      })

      return res.status(200).json(token);
    }

    return res.status(400).json({message:"Invalid credintial"});


  }catch(error){
    res.status(500).json({message:`Error message: ${error.message}`});

  }
}
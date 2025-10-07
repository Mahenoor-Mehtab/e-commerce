import jwt from "jsonwebtoken"

const adminAuth =  async (req , res ,next )=>{
   try{
     const {token} = req.cookies;
// token undefined :
    if(!token) return res.status(400).json({
        message: "Not Authorized Login again"
    })

 let verifyToken = jwt.verify(token , process.env.JWT_SECRET);
// agr token veirfied h to decode ke form me payload deta h jo req ke time or verify ke time token buil ke liey jo chij emailId ye sb chije kagi thi wahi sb 
//  console.log("verify token ",verifyToken);

// jwt.verify throw karta hai error agar token invalid ya expired ho.

 if(!verifyToken) return res.status(400).json({message:"Not Authorized Login Again , invalid token"})


// Ye line req object me ek naya property add kar rahi hai jiska naam adminEmail hai, aur usmein environment variable se admin email store kar rahi hai.
req.adminEmail = process.env.ADMIN_EMAIL ;
next();

   }catch(error){
res.status(500).json({message: `Admin auth error  ${error}`})
   }
    
}

export default adminAuth;
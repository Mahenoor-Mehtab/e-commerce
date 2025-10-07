export const getAdmin = (req , res)=>{
   try{
     const adminEmail = req.adminEmail;
    if(!adminEmail) return res.status(400).json("admin not found");
    console.log(adminEmail);
      
    res.status(201).json({
      email:adminEmail,
      role:"admin"
    })

   }catch(error){
return res.status(500).json({message:`getAdmin error:${error}`})
   }


}
import usermodel from '../model/user.model.js'

export const getCurrentUser = async (req, res)=>{
    try{
        let user = await usermodel.findById(req.userId);
        // console.log("user get",user);
        if(!user) return res.status(404).json({message:"user is not found"});

        return res.status(200).json(user); 

    }catch(error){
        next(error);
        return res.status(500).json({message:`get current user error ${error.message}`})

    }
}



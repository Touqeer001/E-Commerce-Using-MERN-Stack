import User from "../Model/userSchema.js";




export const userSignUp=async(request,response)=>{
    try{

        const exist=await User.findOne({username:request.body.username});
        if(exist){
            return response.status(401).json({message:"User Already Exixt..."})

        }



        const user=request.body;
        const newUser=new User(user);
        await newUser.save();

        response.status(200).json({message:user});

   


    }catch(error){
        response.status(500).json({message:error.message});



    }


}

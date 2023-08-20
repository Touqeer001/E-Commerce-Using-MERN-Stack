import mongoose from "mongoose";



 const Connection=async(username,password)=>{
    const Url=`mongodb+srv://${username}:${password}@e-commerce.u9p9rkh.mongodb.net/?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(Url,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database Connected Sucessfully...")


    }catch(error){
        console.log('Error While Connecting in Database Cheack Databse connectivity..',error.message);
    }


};
export default Connection;
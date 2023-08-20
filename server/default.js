import Product from './Model/Product-Schema.js'
import {products} from "./Data/Product.js"
 const DefaultData=async ()=>{

    try{
        await Product.insertMany(products);
        await Product.deleteMany(p)
        console.log("Data Imported Sucessfully..");

    }catch(error){

        console.log("Error While Connecting WIth Database PRoduct",error.message);
    }


 }
 export default DefaultData;

import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true



    },
    url:String,
    defaultUrl:String,
    title:Object,
    price:Object,
    quntity:Number,
    description:String,
    discount:String,
    tagline:String

});

const products=mongoose.model('products',ProductSchema)
export default products;
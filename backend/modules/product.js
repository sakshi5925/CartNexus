import mongoose from "mongoose"
const productSchema= mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    images:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
    type:String
    },
    price:{
        type:Number
    },
    discountPercentage:{
        type:Number
    },
    warrantyInformation:{
        type:String
    },
    shippingInformation:{
        type:String
    },
    returnPolicy:{
        type:String
    },
    productCount:{
        type:Number,
        default:1
    },
    stock: {
        type: Number
    }
})

export const Product = mongoose.model("Product", productSchema, "products"); // Explicitly set collection name

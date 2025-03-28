import { Address } from "../modules/address.js";
import { User } from "../modules/User.js"; 

export const addAddress = async(req,res) => {
    const {fullName, mobileNumber,pincode,flat,area,landmak,city,state,defaultAddress, email}=req.body;
    console.log(fullName, mobileNumber,pincode,flat,area,landmak,city,state,defaultAddress, email);
    try {
        const user=await User.findOne({email:email});
        if(!user){
           return res.status(400).json({
            success:false,
            error:"user not found"});
        }
        const id=user._id; 
        let address= await Address.create({
            userId:id,
            fullName,
             mobileNumber,
             pincode,
             flat,
             area,
             landmak,
             city,
             state,
             defaultAddress

        })
        res.status(201).json({
            success: true,
            message: "Address added successfully",
            data: address
        })
    } catch (error) {
        console.log("Error Occured in adding Address", error);
        res.status(500).json({
            success: false,
            message: "Failed to add"
        })
    }
}

export const orderDetails = async (req,res) => {
    
}
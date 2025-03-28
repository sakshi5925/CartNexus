import { Product } from "../modules/product.js";
import mongoose from "mongoose";
export const AddToCart = async (req, res) => {
  try {
    const {
      id,
      images,
      title,
      description,
      price,
      discountPercentage,
      warrantyInformation,
      shippingInformation,
      returnPolicy,
      stock,
      productCount,
    } = req.body;

    const { id: userId } = req.params; // Extract id properly

    console.log("Received data:", req.body);
    console.log("userId:", userId);

    const checkProduct = await Product.findOne({ id: id, userId: userId });

    if (checkProduct) {
      const updatedProduct = await Product.findByIdAndUpdate(
        checkProduct._id,
        { $inc: { productCount: productCount } },
        { new: true }
      );

      return res.status(200).json({
        success: true,
        message: "Product count updated in cart",
        product: updatedProduct,
      });
    } else {
      const newProduct = new Product({
        userId, // Ensure userId is correctly assigned
        id,
        images,
        title,
        description,
        price,
        discountPercentage,
        warrantyInformation,
        shippingInformation,
        returnPolicy,
        stock,
        productCount,
      });

      await newProduct.save();

      return res.status(201).json({
        success: true,
        message: "Product added to cart",
        product: newProduct,
      });
    }
  } catch (error) {
    console.error("Error in Adding to Cart:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


export const getProduct = async (req, res) => {
  try {
    const userId = req.params.id; 
    console.log("Received userId:", userId);

    // Convert userId to ObjectId
    const objectUserId = new mongoose.Types.ObjectId(userId);

    // Query the database
    const products = await Product.find({ userId: objectUserId });

    console.log("Direct DB Query Result:", products);

    if (products.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No products found in database",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error in fetching the data:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

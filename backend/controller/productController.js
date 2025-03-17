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


    console.log("Received data:", req.body);

    const checkProduct = await Product.findOne({ id: id });

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
    const products = await mongoose.connection.db.collection("products").find({}).toArray();
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

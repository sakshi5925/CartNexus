import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectToDatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database Connected Successfully');
        console.log("Connected to database:", mongoose.connection.name);

        
    } catch (error) {
        console.log('MongoDB connection failed: ', error);
        process.exit(1);
    }   
}
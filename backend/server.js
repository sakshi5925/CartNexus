import express from 'express'
import dotenv from 'dotenv'
import { productRoutes } from './routes/productRoutes.js';
import cors from 'cors'
import { connectToDatabase } from './config/connectionToDatabase.js';
import { authRoutes } from './routes/authRoutes.js';
import { userRoutes } from './routes/userRoutes.js';
// import cookieParser from 'cookie-parser';

dotenv.config();

connectToDatabase();
const app = express();

app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }))

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// app.use(cookieParser);

app.use('/product', productRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// http://localhost:3000/auth/signup

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
}) ;
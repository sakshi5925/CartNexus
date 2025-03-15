import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }))


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
}) ;
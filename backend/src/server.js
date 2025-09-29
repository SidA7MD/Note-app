import express from "express";
import Noteroute from './Routes/Noteroute.route.js';
import { connectDB } from "./config/db.js";
import cors from 'cors';
import dotenv from "dotenv";
import rateLimiter from "./Middleware/Ratelimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // optional
    credentials: true, // optional if you need cookies/auth headers
  })
);

app.use(rateLimiter);


app.use('/api/notes' , Noteroute);


connectDB().then(() => {
app.listen(PORT, () => {
    console.log('Server Running on Port: '+5001);
});
});
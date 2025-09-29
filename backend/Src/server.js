import express from "express";
import Noteroute from './Routes/Noteroute.route.js';
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
app.use(express.json());

app.use('/api/notes' , Noteroute);



app.listen(PORT, () => {
    console.log('Server Running on Port: '+5001);
});

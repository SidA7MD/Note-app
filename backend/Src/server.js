import express from "express";
import Noteroute from './Routes/Noteroute.route.js';
import { connectDB } from "./config/db.js";

const app = express();

app.use('/api/notes' , Noteroute);
connectDB();


app.listen(5001, () => {
    console.log('Server Running on Port 5001');
});

import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import cors from "cors";


import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import { app,server } from "./lib/socket.js";


dotenv.config();

const PORT = process.env.PORT || 5001;
 
app.use(
    cors({
        origin:"https://vibetalks.netlify.app",
        credentials:true,
       
    })
)

// app.use(express.json());
app.use(express.json({ limit: '3mb' }));
app.use(express.urlencoded({ extended: true, limit: '3mb' }));
app.use(cookieparser());


// Routes
app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);

server.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})

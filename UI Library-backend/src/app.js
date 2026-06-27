import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { connectDB } from "./config/connectDB.js"
import authRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"

dotenv.config()

let app = express()

app.listen(process.env.PORT,()=>{
    console.log("server is running ");
})

connectDB()

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:" http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRoutes)

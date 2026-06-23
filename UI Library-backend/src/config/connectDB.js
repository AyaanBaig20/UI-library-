import mongoose from "mongoose"

export async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/UI-Lib')
        console.log("db connected");
        
    } catch (error) {
     console.log(error);
    }
}

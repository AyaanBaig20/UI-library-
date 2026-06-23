import mongoose, { Types } from "mongoose";

let userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:2
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        require:true,
        enum:["user","admin"],
        default:"user"
    }
},{timestamps:true})

let userModel = mongoose.model("user",userSchema)
export default userModel
import mongoose from "mongoose"

const shopSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
},{timestamps:true})
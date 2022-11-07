import mongoose, { model } from "mongoose";

import userInterface from "../store/userInterface";

import multiImages from '../store/imagesInterface'

export const schema = mongoose.Schema;

const userSchema = new schema<userInterface>({
    
    firstname:{
        type:String,
        required:true,
        default:null
    },
    lastname:{
        type:String,
        required:true,
        default:null
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String
    },
    image:{
        type:String
    }
});

const imageSchema = new schema<multiImages>({

    filename:{
        type:String
    }
});


export const userModel = model("users",userSchema);

export const imagesModel = model("images",imageSchema);


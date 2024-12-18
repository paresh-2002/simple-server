import mongoose from "mongoose";

const subTypeSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true});


export const SubTodo = mongoose.model('SubTodo', subTypesSchema);
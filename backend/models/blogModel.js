const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    image:{
        type:String,
        required:[true,"image is required"],
        default:"https://tse2.mm.bing.net/th?id=OIP.DTEjR2CiMxG6HbWb7C44bAHaFE&pid=Api&P=0&h=180"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"user is required"]
    }
},{
    timestamps:true
})

const Blog=mongoose.model('Blog',blogSchema);
module.exports = Blog;
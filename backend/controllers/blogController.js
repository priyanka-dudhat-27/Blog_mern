const Blog=require("../models/blogModel")

module.exports.getAllblogs=async(req,res)=>{
    try {
        const blogData=await Blog.find().populate("user","name");
        if(blogData){
            return res.status(200).json({totalBlogs:blogData.length,blogData});
        }else{
            return res.status(404).json({message:"No blogs found"})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"something wrong"})
    }
}

// add blogs
module.exports.add=async(req,res)=>{
    try {
        const {title,description,image}=req.body;
        if(!title ||!description ||!image){
            return res.status(400).json({message:"Please fill all fields"})
        }

        req.body.user=req.user;
        const blogData=await Blog.create(req.body)
        if(blogData){
            return res.status(200).json({message:"Blog created successfully",data:blogData})
        }else{
            return res.status(404).json({message:"Failed to create blog"})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"something wrong"})
    }
}
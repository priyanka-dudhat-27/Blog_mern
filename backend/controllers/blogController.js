const Blog=require("../models/blogModel")
const User=require("../models/userModel")

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

// update blog
module.exports.update=async(req,res)=>{
    try {
        const {title,description,image} = req.body;
        if(!title || !description ||!image){
            return res.status(400).json({message:"title and description are required"})
        }

        const blogId=await Blog.findById(req.params.id)
        if(blogId){
            const updateData=await Blog.findByIdAndUpdate(blogId,req.body,{new:true})
            if(updateData){
                return res.status(200).json({message:"blog updated successfully",data:updateData})
            }else{
                return res.status(404).json({message:"Failed to update blog"})
            }
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"something wrong in update api"})
    }
}

// delete blog
module.exports.delete=async(req,res)=>{
    try {
        const blogId=await Blog.findById(req.params.id);
        if(blogId){
            const deleteData=await Blog.findByIdAndDelete(blogId)
            if(deleteData){
                return res.status(200).json({message:"Blog deleted successfully"})
            }else{
                return res.status(404).json({message:"Failed to delete blog"})
            }
        }
    } catch (error) {
        console.log(error)
        return res.satatus(400).json({message:"Something wrong in delete api"})
    }
}

// blog get by user id
module.exports.getByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const userBlogs = await Blog.find({ user: userId });
        console.log(userBlogs)

        if (userBlogs.length > 0) {
            return res.status(200).json(userBlogs);
        } else {
            return res.status(404).json({ message: "Blogs not found" });
        }
    } catch (error) {
        console.error('Error fetching blogs by user ID:', error);
        return res.status(500).json({ message: "Something went wrong in getByUserId API" });
    }
};

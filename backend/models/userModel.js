const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[6,"password must be at least 6 characters long"]
    },
    blogs:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    }
},{
    timestamps:true
})

const User=mongoose.model('User',userSchema);
module.exports=User;
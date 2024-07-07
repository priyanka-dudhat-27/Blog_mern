const express=require("express");
const routes=express.Router();
const blogController=require("../controllers/blogController");
const { requireLogin } = require("../middlewares/requireLogin");

routes.get("/getAllblogs",blogController.getAllblogs)
routes.post("/add",requireLogin,blogController.add)

module.exports=routes;
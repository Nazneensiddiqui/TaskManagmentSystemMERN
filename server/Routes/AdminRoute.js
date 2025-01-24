const express=require("express");
const route=express.Router();
const adminControler=require("../Controllers/AdminControler")

route.post("/adminlogin", adminControler.AdminLogin)

module.exports=route;
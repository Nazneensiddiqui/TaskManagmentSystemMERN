const express=require("express");
const route=express.Router();
const adminControler=require("../Controllers/AdminControler")

route.post("/adminlogin", adminControler.AdminLogin)
route.post("/createuser", adminControler.CreateUser)
route.get("/assigntaskDisplay", adminControler.AssinTaskDisplay)
route.post("/savetask", adminControler.AssignTaskSave)
route.get("/userreport",adminControler.userReportDisplay)
route.post("/reassignreport", adminControler.ReAssignTask)
module.exports=route;
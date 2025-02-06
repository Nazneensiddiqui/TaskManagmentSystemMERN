const EmpModel=require("../Models/employeeModel")
const taskModel = require("../Models/taskModel")

const EmployeeLogin=async(req,res)=>{
   const { userid, password }=req.body
   try {
    const Employee= await EmpModel.findOne({email:userid})
    if(!Employee)
    {
        res.status(400).send({msg:"Invalid Email!!!!"})
    }
    else if(Employee.password!=password)
    {
        res.status(400).send({msg:"Invalid Password!!!!"}) 
    }
    res.status(200).send(Employee)
   } catch (error) {
    console.log(error)
   }
}

const EmpDisplayTask=async(req , res)=>{
    const { empid}=req.body
    try {
        const Task= await taskModel.find({empid:empid})
         res.status(200).send(Task)
    } catch (error) {
      console.log(error)  
    }
}

const EmpSubmitTask=async(req,res)=>{
  const  { taskid, taskStatus }= req.body
    try {
        const Task= await taskModel.findByIdAndUpdate(taskid ,{ taskstatus:taskStatus , empReport:"submited"})
        res.status(200).send({msg:"Task Succesfully Submited!!!"})
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    EmployeeLogin,
    EmpDisplayTask,
    EmpSubmitTask
}
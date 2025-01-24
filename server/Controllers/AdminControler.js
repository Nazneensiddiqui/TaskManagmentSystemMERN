const AdminModel=require("../Models/AdminModel")

const AdminLogin=async(req , res)=>{
    const {admin , password}=req.body
   
try {
    const Admin= await AdminModel.findOne({userid:admin})
    if(!Admin)
    {
        res.status(400).json({msg:"Invalid User ID"})
    }
    if(Admin.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"}) 
    }
    res.status(200).json(Admin)

} catch (error) {
    console.log(error)
}
   
}

module.exports={
    AdminLogin
}
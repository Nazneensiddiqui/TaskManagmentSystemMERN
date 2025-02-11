import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {message} from "antd"
import { useNavigate } from 'react-router';



const ResetPass=()=>{
    const [input , setInput]=useState({})
    const [userid , setUserid]=useState("")
    const navigate=useNavigate()
    
    useEffect(()=>{
      setUserid(localStorage.getItem("userid"))
    },[])
    
    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values , [name]:value}))
    }
    
    const handleSubmit=async()=>{
      let api="hhttps://taskmanagmentsystemmern-1.onrender.com/users/resetpass";
    
    try {
      const res= await axios.post(api , {userid:userid, ...input})
      message.success("Password Succesfully Update")
    navigate("/home")
    } catch (error) {
      message.error(error.res.data.msg)
    }
    }



    return(
        <>
      <div className="modal show"  style={{ display: 'block', position: 'initial' }} >
      <Modal.Dialog >
        <Modal.Header closeButton style={{backgroundColor:"#005f4f"}}>
          <Modal.Title align="center" style={{ color:"#f7e8c1",backgroundColor:"#005f4f"}}>Reset Password</Modal.Title>
        </Modal.Header>

        <Modal.Body align="center" style={{ color:"#f7e8c1",backgroundColor:"#005f4f"}}>
        Enter Prvious Password : <input type="password" name='oldpassword' value={input.oldpassword} onChange={handleInput} style={{borderRadius:"5px"}}/>
        <br/><br/>
        Enter New Password : <input type="password"  name='newpassword' value={input.newpassword} onChange={handleInput} style={{borderRadius:"5px"}}/>
        <br/>
         </Modal.Body>  

        <Modal.Footer style={{backgroundColor:"#005f4f"}}>
          
          <Button variant="primary" style={{backgroundColor:" #f7e8c1",color:"#005f4f"}} onClick={handleSubmit}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
        
        </>
    )
}
export default ResetPass;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import "../css/Dashboard.css"
import {Link , Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom';


import { GrDashboard } from "react-icons/gr";
import { FaUsersGear } from "react-icons/fa6";
import { TbFileReport } from "react-icons/tb";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

import { GrUserAdmin } from "react-icons/gr";




const Dashboard=()=> {
  const[username , setUsername]=useState("")

const navigate=useNavigate()

useEffect(()=>{
setUsername(localStorage.getItem("username"))
},[])


  return (
    <>
   
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar bg="Dark Teal" variant="dark" expand="lg" fixed="top" style={{backgroundColor:"#008070"}}>
        <Navbar.Brand href="#" style={{marginLeft:"700px"}} ><GrUserAdmin />  Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto" style={{marginLeft:"350px"}}>
          <Nav.Link href="#" onClick={()=>{navigate("/loginpage")}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="sidebar">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="#"><GrDashboard/>   Dashboard</Nav.Link>
              <Nav.Link as={Link} to="create employee"><FaUsersGear/>  Create Employee</Nav.Link>
              <Nav.Link as={Link} to="assign task"><TbFileReport/>    Assign Task</Nav.Link>
              <Nav.Link as={Link} to="empreport"><span><MdOutlineContentPasteGo/>   Employee Report</span></Nav.Link>
              <Nav.Link as={Link} to="resetpass"><span> Reset-password</span></Nav.Link>
              </Nav>
          </Col> 

        
       

          {/* Main Content */}
          <Col md={10} className="content">
            <div className="content-area">
              <p align="center" style={{color:" #6b4b3a"}}>Welcome to the {username}               
             </p>
              {/* Example scrollable content */}
             
              <div className="scrollable-content">
             
                <Outlet/>
          </div>
            
          
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
    </>
  );
}

export default Dashboard;


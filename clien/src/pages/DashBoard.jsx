import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import "../css/Dashboard.css"
import {Link , Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';

import { GrDashboard } from "react-icons/gr";
import { ImInsertTemplate } from "react-icons/im";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { GrDocumentUpdate } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";
import Header from '../component/Header';
import TopNavbar from '../component/Topnavbar';



const Dashboard=()=> {
  const[username , setUsername]=useState("")
  const [useremail , setUseremail]=useState("")
const navigate=useNavigate()

useEffect(()=>{
  if(localStorage.getItem("username" == null))
  {
    navigate("/home")
  }
  else{
    setUsername(localStorage.getItem("username"))
    setUseremail(localStorage.getItem("useremail"))
  }
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
            {/* <Nav.Link href="#"><img src={logo} width={40} height={30}/></Nav.Link> */}
            <Nav.Link href="#" onClick={()=>{navigate("/loginpage")}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="sidebar">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="/dashborad"><GrDashboard/>   Dashboard</Nav.Link>
              <Nav.Link as={Link} to="insert"><ImInsertTemplate />  Insert</Nav.Link>
              <Nav.Link as={Link} to="display"> <BsPcDisplayHorizontal/>   Display</Nav.Link>
              <Nav.Link as={Link} to="update"><GrDocumentUpdate/>   Update</Nav.Link>
              <Nav.Link as={Link} to="search"><TbWorldSearch/>    Search</Nav.Link>
            </Nav>
          </Col> 

          <Header/>
          <TopNavbar/>
       

          {/* Main Content */}
          <Col md={10} className="content">
            <div className="content-area">
              <p align="center" style={{color:" #6b4b3a"}}>Welcome to the Admin Dashboard <Link to="reset">Reset-password</Link>               
             </p>
              {/* Example scrollable content */}
             
              <div className="scrollable-content">
             
                <Outlet/>
          </div>
               <Footer/>
          
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
    </>
  );
}

export default Dashboard;
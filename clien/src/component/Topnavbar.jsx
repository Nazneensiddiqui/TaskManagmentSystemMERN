import "../css/topnavbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNavbar = () => {
  return (

    <>
   
        
     <Navbar expand="lg"  className="main-navbar">
      <Container>
        <Navbar.Brand href="#home" style={{color:"white" , fontSize:"30pxx"}}>Task Managment System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Services</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Portfolio</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Team</Nav.Link>
            <Nav.Link href="#link"  style={{color:"white"}}>Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color:"white"}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"  style={{color:"white"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

    
    
  
   
      
    {/* //   <div className="main-navbar">
    //     <div className="logo">
    //       <h1>Impact</h1>
    //     </div>
    //     <ul className="nav-links">
    //       <li><a href="#">Home</a></li>
    //       <li><a href="#">About</a></li>
    //       <li><a href="#">Services</a></li>
    //       <li><a href="#">Portfolio</a></li>
    //       <li><a href="#">Team</a></li>
    //       <li><a href="#">Team</a></li>
    //       <li className="dropdown">
    //         <a href="#">Dropdown <span>▼</span></a>
    //       </li>
    //       <li><a href="#">Contact</a></li>
    //     </ul>
    //   </div> */}
      </>
  );
};

export default TopNavbar;
import Footer from "./component/Footer";
import Header from "./component/Header";
import TopNavbar from "./component/Topnavbar";
import {Outlet} from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <div style={{position:"sticky", top:"0",zIndex:"10" }}>
        <Header/>
        <TopNavbar/>
        </div>
       
       <Outlet/>
       <Footer/>
        
        </>
    )
}
export default Layout
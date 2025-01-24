import Footer from "./component/Footer";
import Header from "./component/Header";
import TopNavbar from "./component/Topnavbar";
import {Outlet} from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <Header/>
        <TopNavbar/>
       <Outlet/>
       <Footer/>
        
        </>
    )
}
export default Layout
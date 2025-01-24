import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/Loginpage";
import Dashboard from "./pages/DashBoard"





const App=()=>{
  return(
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<LoginPage/>}/>
<Route path="loginpage" element={<LoginPage/>}/>
</Route>

<Route path="dashboard" element={<Dashboard/>}>

</Route>



</Routes>
</BrowserRouter>
   
    </>
  )
}
export default App;
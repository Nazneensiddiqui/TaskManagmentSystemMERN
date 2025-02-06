import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/Loginpage";
import Dashboard from "./pages/DashBoard"
import Admin from "./pages/Admin";
import CreateEmployee from "./pages/CreateEmployee";
import AssignTask from "./pages/AssignTask";
import EmployeeDashBorad from "./pages/EmpDashborad";
import DisplayUserTask from "./pages/DisplayUserTask";
import User from "./pages/user";
import UserReport from "./pages/UserReport";
import ResetPass from "./pages/ResetPass";





const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="loginpage" element={<LoginPage />} />
         

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Admin />} />
            <Route path="create employee" element={<CreateEmployee />} />
            <Route path="assign task" element={<AssignTask />} />
            <Route path="empreport" element={<UserReport />} />
            <Route path="resetpass" element={<ResetPass/>} />
          </Route>

           <Route path="empdashborad" element={<EmployeeDashBorad/>}>
           <Route index element={<User/>} />
           <Route path="displayusertask" element={<DisplayUserTask/>}/>
           </Route>
</Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;
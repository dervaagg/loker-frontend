import { Route, Routes } from "react-router-dom";
// import { Form1 } from "./components/Add_job";
// import { Dashboard } from "./components/Dashboard";
// import { Form2 } from "./components/Detail_job";
// import { Form4 } from "./components/Detail_reg";
// import { Table3 } from "./components/Detail_tbl_loker";
// import { Sidebar } from "./components/Sidebar";
// import { Table1 } from "./components/Table_job";
// import { Table2 } from "./components/Table_reg";
// import { Form3 } from "./components/Update_job";
// import { Form5 } from "./components/Update_reg";
import Home from "./pages/Dashboard";
import Layout from "./components/Layout";
import Job from "./pages/Job";
import Registrant from "./pages/Registrans";
import AddJob from "./pages/add_Job";
import DetailJob from "./pages/detail_Job";
import UpdateJob from "./pages/update_Job";
import DetailRegList from "./pages/detail_reg_List";
import DetailReg from "./pages/detail_Reg";
import UpdateReg from "./pages/update_Reg";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/job" element={<Job />} />
        <Route path="/registrant" element={<Registrant />} />
        <Route path="/addJob" element={<AddJob />} />
        <Route path="/detailJob" element={<DetailJob />} />
        <Route path="/updateJob" element={<UpdateJob />} />
        <Route path="/detailRegList" element={<DetailRegList />} />
        <Route path="/detailReg" element={<DetailReg />} />
        <Route path="/updateReg" element={<UpdateReg />} />
      </Route>
    </Routes>
  );
}

export default App;

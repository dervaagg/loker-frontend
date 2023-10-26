import { Form1 } from "./components/Add_job";
import { Dashboard } from "./components/Dashboard";
import { Form2 } from "./components/Detail_job";
import { Form4 } from "./components/Detail_reg";
import { Table3 } from "./components/Detail_tbl_loker";
import { Sidebar } from "./components/Sidebar";
import { Table1 } from "./components/Table_job";
import { Table2 } from "./components/Table_reg";
import { Form3 } from "./components/Update_job";
import { Form5 } from "./components/Update_reg";


function App() {
  return (
    <div>
      <Sidebar/>
      {/* <Dashboard/> */}
      <Table1/>
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <Form3/> */}
      {/* <Table3/> */}
      {/* <Form4/> */}
      {/* <Form5/> */}
      {/* <Table2/> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpCreate from "./Empcreate";
import EmpDetail from "./Empdetail";
import EmpEdit from "./Empedit";
import EmpListing from "./employeelist";

function App() {
  return (
    <div className="App">
      <h1>React js Crud Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

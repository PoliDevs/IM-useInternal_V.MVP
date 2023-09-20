
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Menu from "./components/pages/menu/Menu";
import Sales from "./components/pages/sales/Sales";
import History from "./components/pages/history/History";
import Config from "./components/pages/config/Config";
import Nav from "./components/organisms/nav/Nav.jsx";
import "semantic-ui-css/semantic.min.css";
import Welcome from "./components/pages/welcome/Welcome.jsx";
import axios from "axios";
import Sing_in from "./components/pages/singn_in/Sing_in.jsx";
import Instructions from "./components/pages/Instructions/Instructions.jsx";
import InstructionOne from "./components/pages/IntructionOne/InstructionOne.jsx";
import InstructionTwo from "./components/pages/InstructionTwo/InstructionTwo.jsx";
import InstructionThree from "./components/pages/InstructionThree/InstructionThree.jsx";
import InstructionFour from "./components/pages/InstructionFour/InstructionFour.jsx";
axios.defaults.baseURL='http://localhost:3001/';
//axios.defaults.baseURL='https://nodejs-production-bbf9.up.railway.app';

function App() {
  return (
    <>
      <Routes>
        {/* Rutas para uso interno */}
        <Route path="/" element={<Login />} />
        <Route path="/singn_in" element={<Sing_in />} />
        <Route path="/welcome" element={<Welcome />} />
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />} path="">
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/history" element={<History />} />
          <Route path="/config" element={<Config />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/instructions/download" element={<InstructionOne />} />
          <Route path="/instructions/uploadMenu" element={<InstructionTwo />} />
          <Route path="/instructions/image" element={<InstructionThree />} />
          <Route path="/instructions/onDemand" element={<InstructionFour />} />
        </Route>
        {/* Rutas protegidas */}
      </Routes>
    </>
  );
}

function ProtectedRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/history" element={<History />} />
        <Route path="/config" element={<Config />} />
        <Route path="/instructions/download" element={<InstructionOne />} />
        <Route path="/instructions/uploadMenu" element={<InstructionTwo />} />
        <Route path="/instructions/image" element={<InstructionThree />} />
        <Route path="/instructions/onDemand" element={<InstructionFour />} />
      </Routes>
    </>
  );
}

export default App;







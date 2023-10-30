import { Routes, Route,useLocation } from "react-router-dom";
import ProtectedRoutes from "./components/atom/ProtectedRoutes/ProtectedRoutes.jsx";
import Instructions from "./components/pages/Instructions/Instructions.jsx";
import InstructionOne from "./components/pages/IntructionOne/InstructionOne.jsx";
import InstructionTwo from "./components/pages/InstructionTwo/InstructionTwo.jsx";
import InstructionThree from "./components/pages/InstructionThree/InstructionThree.jsx";
import InstructionFour from "./components/pages/InstructionFour/InstructionFour.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Welcome from "./components/pages/welcome/Welcome.jsx";
import Sing_in from "./components/pages/singn_in/Sing_in.jsx";
import History from "./components/pages/history/History";
import Login from "./components/pages/login/Login.jsx";
import Config from "./components/pages/config/Config";
import Nav from "./components/organisms/nav/Nav.jsx";
import Sales from "./components/pages/sales/Sales";
import Menu from "./components/pages/menu/Menu";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import GeneratorQr from "./components/pages/generatorQr/GeneratorQr.jsx";
//axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL='https://nodejs-production-bbf9.up.railway.app';

function App() {
  const location = useLocation();

  // Determina si debes mostrar el componente <Nav />
  const shouldShowNav = location.pathname !== "/singn_in" && location.pathname !== "/" && location.pathname !=="/welcome" ;
  return (
    <>
      {shouldShowNav&&<Nav/>}
     
      <Routes>
        <Route path="/singn_in" element={<Login />} />
        <Route path="/" element={<Sing_in />} />
        {/* <Route element={<ProtectedRoutes isAllowed={!!user_internal} />}> */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          {/* <Route element={<ProtectedRoutes isAllowed={!!user && user.employeeType.type === "Owner"}/>}> */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/config" element={<Config />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/instructions/download" element={<InstructionOne />} />
          <Route path="/instructions/uploadMenu" element={<InstructionTwo />} />
          <Route path="/instructions/image" element={<InstructionThree />} />
          <Route path="/instructions/onDemand" element={<InstructionFour />} />
          {/* <Route path='/QrGenerator' element={<QrGenerator/>}/> */}
          <Route path='/QrGenerator' element={<GeneratorQr/>}/>
          {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;

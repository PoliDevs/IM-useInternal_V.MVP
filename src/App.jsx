import { Routes, Route,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { useState } from "react";
import axios from "axios";
import QrGenerator from "./components/molecules/QrCodeGenerator/QrCodeGenerator.jsx";
//axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL='https://nodejs-production-bbf9.up.railway.app';

import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import global_pt from "./translations/pt/global.json";
import global_pt_bra from "./translations/pt-br/global.json";
import global_fr from "./translations/fr/global.json";
import global_it from "./translations/it/global.json";

function App() {
  //?
  const language=useSelector(state=>state.language)
  i18next.init({
    interpolation: { escapeValue: false },
    lng: language,
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
      pt: {
        global: global_pt,
      },
      pt_bra: {
        global: global_pt_bra,
      },
      fr: {
        global: global_fr,
      },
      it: {
        global: global_it,
      },
    },
  });
  //?
  const user_internal = useSelector((state) => state.user_internal);
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
          <Route path='/QrGenerator' element={<QrGenerator/>}/>
          {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;

/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Menu from "./components/pages/menu/Menu";
import Sales from "./components/pages/sales/Sales";
import History from "./components/pages/history/History";
import Config from "./components/pages/config/Config";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <>
      {/* <Nav/> */}
      <Routes>
        //* Rutas para uso interno *//
        <Route path="/" element={<Login/>}/>
        //! Rutas protegidas //!
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/history" element={<History />} />
          <Route path="/config" element={<Config/>} />
        {/* </Route> */}
        //! Rutas protegidas //!
      </Routes>
    </>
  );
}

export default App;

// /* eslint-disable react/jsx-no-comment-textnodes */
// import { Routes, Route } from "react-router-dom";
// import Login from "./components/pages/login/Login.jsx";
// import Dashboard from "./components/pages/dashboard/Dashboard";
// import Menu from "./components/pages/menu/Menu";
// import Sales from "./components/pages/sales/Sales";
// import History from "./components/pages/history/History";
// import Config from "./components/pages/config/Config";
// import Nav from "./components/organisms/nav/Nav.jsx";
// import "semantic-ui-css/semantic.min.css";

// function App() {
//   return (
//     <>
//       {/* <Nav/> */}
//       <Routes>
//         //* Rutas para uso interno *//
//         <Route path="/" element={<Login/>}/>
//         //! Rutas protegidas //!
//         {/* <Route element={<ProtectedRoutes />}> */}
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/history" element={<History />} />
//           <Route path="/config" element={<Config/>} />
//         {/* </Route> */}
//         //! Rutas protegidas //!
//       </Routes>
//     </>
//   );
// }

// export default App;
/* eslint-disable react/jsx-no-comment-textnodes */






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
axios.defaults.baseURL='http://localhost:3001/';
//axios.defaults.baseURL='https://nodejs-production-bbf9.up.railway.app';

function App() {
  return (
    <>
      <Routes>
        {/* Rutas para uso interno */}
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome/>}/>
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />} path="">
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/history" element={<History />} />
          <Route path="/config" element={<Config />} />
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/history" element={<History />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </>
  );
}

export default App;







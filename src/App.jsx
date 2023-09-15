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
import MenuInstructions from "./components/molecules/MenuInstructions/MenuInstructions.jsx";
import Sing_in from "./components/pages/singn_in/Sing_in.jsx";
import Instructions from "./components/pages/Instructions/Instructions.jsx";
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
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/sales" element={<Sales />} />
          <Route path="/history" element={<History />} />
          <Route path="/config" element={<Config />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/instructions/download" element={<MenuInstructions />} />
          <Route path="/instructions/upload" element={<MenuInstructions />} />
          <Route path="/instructions/image" element={<MenuInstructions />} />
          <Route path="/instructions/onDemand" element={<MenuInstructions />} />
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
        <Route
          path="/instructions/download"
          element={
            <MenuInstructions
              type="download"
              step="1"
              stepText="Descarga nuestra plantilla para menú"
              fileText="Descargar la plantilla"
            />
          }
        />
        <Route
          path="/instructions/upload"
          element={
            <MenuInstructions
              type="upload"
              step="2"
              stepText="Sube  tu menú una vez que hayas guardado tus productos"
              fileText="Subir menú"
            />
          }
        />
        <Route
          path="/instructions/image"
          element={
            <MenuInstructions
              type="upload"
              step="3"
              stepText={
                "Sube la imagen del logo de tu local \ncondiciones: \n -Tu imagen debe ser cuadrada 1:1 \n -Formato JPG \n -Peso maximo: 100KB"
              }
              fileText="Subir imagen"
            />
          }
        />
        <Route
          path="/instructions/onDemand"
          element={
            <MenuInstructions
              step="4"
              stepText="¡Abre tu local para empezar a vender!"
              
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;







import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <Routes>
        //* Rutas para uso interno *//
        <NavBar/>
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

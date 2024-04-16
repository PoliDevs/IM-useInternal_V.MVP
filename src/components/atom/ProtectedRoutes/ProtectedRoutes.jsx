import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const location = useLocation();
  const instructionsPath = location.pathname.includes("/instructions");
  const googleUser = localStorage.getItem("googleUser");
  const token = localStorage.getItem("token");
  const isAllowInstructions = localStorage.getItem("isAllowedInstructions");

  if (!googleUser && !token) {
    return <Navigate to="/" replace />;
  }

  if (!isAllowInstructions && !instructionsPath) {
    return <Navigate to="/instructions" replace />;
  }

  return children ? children : <Outlet />;
}

import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const googleUser = localStorage.getItem("googleUser");
  const token = localStorage.getItem("token");
  const isAllowInstructions = localStorage.getItem("isAllowedInstructions");

  if (!googleUser && !token) {
    return <Navigate to="/" replace />;
  }

  if (!isAllowInstructions) {
    return <Navigate to="/instructions" replace />;
  }

  return children ? children : <Outlet />;
}

import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ children, redirectTo = "/singn_in", isAllowed}) {
  if (!isAllowed){ 
    return <Navigate to={redirectTo} />
  }

  return children ? children : <Outlet />;
}

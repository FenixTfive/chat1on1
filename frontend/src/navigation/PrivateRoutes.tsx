import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../ApiContext/AuthenticationContext";

const PrivateRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log("PrivateRoutes: isAuthenticated:", isAuthenticated());

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (loading) {
    return (
      <div className="mx-auto my-60 w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-cyan-800"></div>
    );
  }

  return children;
};

export default PrivateRoute;

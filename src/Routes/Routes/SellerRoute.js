import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useBuyer from "../../Hooks/useBuyer";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loading />;
  }

  if (loading) {
    return (
      <div className="mx-auto my-60 w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-cyan-800"></div>
    );
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;

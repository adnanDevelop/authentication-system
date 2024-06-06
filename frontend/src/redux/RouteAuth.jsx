import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};

// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

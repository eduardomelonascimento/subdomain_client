import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("access-token");

const ProtectedRoute = () =>
  isAuthenticated() ? <Outlet /> : <Navigate to="/" />;

export default ProtectedRoute;

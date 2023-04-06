import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Domains from "./pages/Domains";
import Login from "./pages/Login";
import Subdomains from "./pages/Subdomains";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/domains" element={<ProtectedRoute />}>
          <Route path="/domains" element={<Domains />} />
        </Route>
        <Route path="/subdomains/:id" element={<ProtectedRoute />}>
          <Route path="/subdomains/:id" element={<Subdomains />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"}/>} />
      </Routes>
    </BrowserRouter>
  );
}

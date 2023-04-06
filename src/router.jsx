import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Domains from "./pages/Domains";
import Subdomains from "./pages/Subdomains";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/subdomains/:id" element={<Subdomains />} />
      </Routes>
    </BrowserRouter>
  );
}

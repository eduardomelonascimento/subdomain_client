import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import "./Navbar.css";
import { logout } from "../services/user";

function Navbar() {
  const navigate = useNavigate();
  const { request } = useFetch();
  async function handleLogout() {
    const { url, options } = logout();
    const { response } = await request(url, options);
    if (response.ok) {
      localStorage.removeItem("access-token");
      navigate("/");
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to={"/"}>SubdomainGetter</Link>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

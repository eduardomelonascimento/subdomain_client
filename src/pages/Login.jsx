import { Navigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import "./Login.css";

function Login() {


  if (localStorage.getItem("access-token")) Navigate({ to: "/domains" });

  return (
    <div className="form-wrapper">
      <LoginForm />
    </div>
  );
}

export default Login;

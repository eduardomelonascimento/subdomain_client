import { useState } from "react";
import { apiURL } from "../utils";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(`${apiURL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (res.status == 401) {
      setError(true);
      return;
    }
    setError(false);
    const json = await res.json();
    localStorage.setItem("access-token", json.token);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Username
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          {error && <span>Nome de usuário ou senha incorretos</span>}
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

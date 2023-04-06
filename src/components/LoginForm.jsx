import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { login } from "../services/user";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = login(username, password);
    const { response, json } = await request(url, options);
    if (response.ok) {
      localStorage.setItem("access-token", json.token);
      navigate("/domains");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="sr-only">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
        />

        <label htmlFor="password" className="sr-only">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        {loading ? (
          <span>Carregando...</span>
        ) : (
          <button type="submit">Submit</button>
        )}
        {error && <span>Nome de usuário ou senha inválidos</span>}
      </form>
    </>
  );
}

export default LoginForm;

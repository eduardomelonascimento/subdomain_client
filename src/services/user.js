import { apiURL } from "../utils";

export function login(username, password) {
  return {
    url: apiURL + "/auth",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    },
  };
}

export function logout() {
  return {
    url: apiURL + "/logout",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
      },
    },
  };
}

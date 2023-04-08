import { apiURL } from "../utils";

export function getSubdomains(id) {
  return {
    url: apiURL + "/subdomains/" + id,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
      },
    },
  };
}

import { apiURL } from "../utils";

export function getDomains() {
  return {
    url: apiURL + "/domains",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
      },
    },
  };
}

export function removeDomain(id) {
  return {
    url: apiURL + "/domains/" + id,
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
      },
    },
  };
}

export function addDomain(url) {
  return {
    url: apiURL + "/domains",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-token": localStorage.getItem("access-token"),
      },
      body: JSON.stringify({ url }),
    },
  };
}

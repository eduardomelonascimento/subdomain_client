import { useEffect, useState } from "react";

import React from "react";
import { apiURL } from "../utils";

function Domains() {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    async function getDomains() {
      const response = await fetch(`${apiURL}/domains`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-token": localStorage.getItem("access-token"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        setDomains(data);
      }
    }
    getDomains();
  }, []);
  return (
    <ul>
      {domains?.map(({ id_domain, url_domain }) => (
        <li key={id_domain}>{url_domain}</li>
      ))}
    </ul>
  );
}

export default Domains;

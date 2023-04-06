import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import "./Domains.css";
import useFetch from "../hooks/useFetch";
import { getDomains, removeDomain } from "../services/domain";
import SearchDomain from "../components/SearchDomain";

function Domains() {
  const [domains, setDomains] = useState([]);
  const { request } = useFetch();

  async function handleDomains() {
    const { url, options } = getDomains();
    const { response, json } = await request(url, options);
    if (response.ok) setDomains(json);
  }

  useEffect(() => {
    handleDomains();
  }, []);

  async function handleDelete(id) {
    const { url, options } = removeDomain(id);
    await request(url, options);
    handleDomains();
  }

  return (
    <>
      <Navbar />
      <div className="domain-wrapper">
        <SearchDomain handleDomains={handleDomains}/>
        <table className="domain-table">
          <thead>
            <tr>
              <th className="first-col">ID</th>
              <th>Domínio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {domains?.map(({ id_domain, url_domain }) => (
              <tr key={id_domain}>
                <td className="first-col">{id_domain}</td>
                <td>
                  <a href={url_domain} target="_blank">
                    {url_domain}
                  </a>
                </td>
                <td className="action">
                  <button
                    title="Remover Domínio"
                    onClick={() => handleDelete(id_domain)}
                  >
                    &#10005;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Domains;

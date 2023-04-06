import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import "./Domains.css";
import useFetch from "../hooks/useFetch";
import { getDomains, removeDomain } from "../services/domain";
import SearchDomain from "../components/SearchDomain";
import Domain from "../components/Domain";

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
        <SearchDomain handleDomains={handleDomains} />
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
              <Domain
                key={id_domain}
                id={id_domain}
                url={url_domain}
                handleClick={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Domains;

import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getSubdomains } from "../services/subdomain";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import "./Subdomains.css";

function Subdomains() {
  const [currentPage, setcurrentPage] = useState(0);
  const [currentSubdomains, setcurrentSubdomains] = useState([]);
  const { id } = useParams();
  const { request, data } = useFetch();

  useEffect(() => {
    async function searchSubdomain() {
      const { url, options } = getSubdomains(id);
      const { response, json } = await request(url, options);
      if (response.ok) setPage(json);
    }
    searchSubdomain();
  }, []);

  useEffect(() => {
    if (data) setPage(data);
  }, [currentPage]);

  function onPrevious() {
    if (currentPage > 0) setcurrentPage(currentPage - 1);
  }
  function onNext() {
    if (currentPage < Math.floor(data.subdomainCount / 100))
      setcurrentPage(currentPage + 1);
  }

  function setPage(dataSrc) {
    setcurrentSubdomains(
      dataSrc.subdomains.filter(
        (subdomain, index) =>
          index >= 100 * currentPage && index < 100 * (currentPage + 1)
      )
    );
  }

  if (currentSubdomains && data)
    return (
      <>
        <Navbar />
        <div className="subdomains-wrapper container">
          {currentSubdomains && (
            <>
              <div className="header">
                <div className="header-left">
                  <h1>
                    Subdomínios de {String(data.url_domain).replace("www.", "")}
                  </h1>
                  <span>Total: {data.subdomainCount}</span>
                </div>
                <div className="header-right">
                  <span>
                    Página {currentPage + 1} de{" "}
                    {Math.ceil(data.subdomainCount / 100)}
                  </span>
                  <div>
                    <button onClick={onPrevious}>&lt;</button>
                    <button onClick={onNext}>&gt;</button>
                  </div>
                </div>
              </div>
              <ul>
                {currentSubdomains.map((subdomain) => (
                  <li key={subdomain}>
                    {`${subdomain}.${String(data.url_domain).replace(
                      "www.",
                      ""
                    )}`}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    );
}

export default Subdomains;

import { addDomain } from "../services/domain";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

function SearchDomain({ handleDomains }) {
  const [domainSearch, setDomainSearch] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = addDomain(domainSearch);
    const { response } = await request(url, options);
    if (response.ok) {
      await handleDomains();
      setDomainSearch("");
    }
  }
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-domain" className="sr-only">
            Buscar domínio
          </label>
          <input
            type="search"
            placeholder="Buscar Domínio"
            onChange={({ target }) => setDomainSearch(target.value)}
            value={domainSearch}
          />
        </form>
        {error ? (
          <p>Domínio não encontrado, verifique se está escrito corretamente.</p>
        ) : null}
      </div>
    </>
  );
}

export default SearchDomain;

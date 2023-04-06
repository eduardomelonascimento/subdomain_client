import React from "react";

function Domain(id, url, handleClick) {
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>
          <a href={url} target="_blank">
            {url}
          </a>
        </td>
        <td className="action">
          <button title="Remover Domínio" onClick={() => handleClick(id)}>
            &#10005;
          </button>
        </td>
      </tr>
    </>
  );
}

export default Domain;

export default function Domain({id, url, handleClick}) {
  return (
    <>
      <tr>
        <td className="first-col">{id}</td>
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

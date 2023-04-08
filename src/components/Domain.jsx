import { Link, Navigate } from "react-router-dom";
import seta from "../assets/rightarrow_102633.svg";

export default function Domain({ id, url, handleClick }) {
  return (
    <>
      <tr>
        <td className="first-col">{id}</td>
        <td>
          <Link to={`/subdomains/${id}`}>{url}</Link>
        </td>
        <td className="action boxcel">
          <Link to={`/subdomains/${id}`}>
            <img src={seta} alt="Seta apontada para a direita" />
          </Link>
          <button title="Remover Domínio" onClick={() => handleClick(id)}>
            &#10005;
          </button>
        </td>
      </tr>
    </>
  );
}

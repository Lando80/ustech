import React from "react";

function Contributor({ data, id }) {
  delete data._id;
  delete data.__v;

  return (
    <tr className={id % 2 === 0 ? "white-row" : "green-row"}>
      <td>{id + 1 || "-"}</td>
      <td>{data.cpf || "-"}</td>
      <td>{data.nome || "-"}</td>
      <td>{data.status || "-"}</td>
      <td>{data.email || "-"}</td>
      <td>{data.telefone || "-"}</td>
      <td>{data.cep || "-"}</td>
      <td>{data.cidade || "-"}</td>
      <td>{data.estado || "-"}</td>
      <td>{data.bairro || "-"}</td>
      <td>{data.logradouro || "-"}</td>
      <td>{data.numero || "-"}</td>
      <td>{data.createdAt || "-"}</td>
      <td>{data.updatedAt || "-"}</td>
    </tr>
  );
}

export default Contributor;

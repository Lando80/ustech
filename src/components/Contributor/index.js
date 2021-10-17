import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

function Contributor({ data, id }) {
  delete data._id;
  delete data.__v;

  const [createdAt, setCreatedAt] = useState(data.createdAt);
  const [updatedAt, setUpdatedAt] = useState(data.updatedAt);

  function formatTimestamps() {
    setCreatedAt(dayjs(createdAt).format("DD/MM/YYYY"));
    setUpdatedAt(dayjs(updatedAt).format("DD/MM/YYYY"));
  }

  useEffect(() => {
    formatTimestamps();
  }, []);

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
      <td>{createdAt}</td>
      <td>{updatedAt}</td>
    </tr>
  );
}

export default Contributor;

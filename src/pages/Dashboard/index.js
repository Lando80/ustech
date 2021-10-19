import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
import Contributor from "../../components/Contributor";

import { Container, Table } from "./styles";

import api from "../../services/api";

function Dashboard() {
  const [contributors, setContributors] = useState([]);

  const getContributors = async () => {
    return api
      .get("/contributors")
      .then((res) => res.data)
      .catch((err) => alert(err));
  };

  const fetchContributors = async () => {
    await getContributors().then(setContributors);
  };

  useEffect(() => {
    fetchContributors();
  }, []);

  useEffect(() => {}, [contributors]);

  return (
    <Fragment>
      <Header />
      <Container>
        <Table>
          <thead>
            <tr>
              {TableHeaderItems().map((item) => {
                return <th>{item}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {contributors.length > 0 ? (
              contributors.map((contributor, index) => {
                return (
                  <Contributor data={contributor} key={index} id={index} />
                );
              })
            ) : (
              <p>Loading data...</p>
            )}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
}

export default withRouter(Dashboard);

function TableHeaderItems() {
  const [items] = useState([
    "ID",
    "CPF",
    "Nome",
    "Status",
    "Email",
    "Telefone",
    "CEP",
    "Cidade",
    "UF",
    "Bairro",
    "Logradouro",
    "Número",
    "Criado em",
    "Atualizado em",
  ]);

  return items;
}

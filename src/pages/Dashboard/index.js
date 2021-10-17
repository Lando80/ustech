import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
import Contributor from "../../components/Contributor";

import { Container, Table } from "./styles";

import api from "../../services/api";

function Dashboard() {
  const [contributors, setContributors] = useState([]);

  const getContributors = async () => {
    try {
      const response = await api.get("/contributors");

      return response.data;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const handleContributors = async () => {
      const data = await getContributors();
      setContributors(data);
    };

    handleContributors();
  }, []);

  return (
    <Fragment>
      <Header />
      <Container>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CPF</th>
              <th>Nome</th>
              <th>Status</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>CEP</th>
              <th>Cidade</th>
              <th>UF</th>
              <th>Bairro</th>
              <th>Logradouro</th>
              <th>Número</th>
              <th>Criado em</th>
              <th>Atualizado em</th>
            </tr>
          </thead>

          <tbody>
            {contributors &&
              contributors.map((contributor, index) => {
                return (
                  <Contributor data={contributor} key={index} id={index} />
                );
              })}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  );
}

export default withRouter(Dashboard);

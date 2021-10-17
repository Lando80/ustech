import React from "react";

import { withRouter } from "react-router-dom";

import { logout } from "../../services/auth";

import { Container } from "./styles";
import Logo from "../Logo";

function Header(props) {
  const handleLogout = () => {
    logout();
    props.history.push("/");
  };

  return (
    <Container>
      <header>
        <Logo width="15rem" />
        <h1>MIA Dashboard</h1>
        <span onClick={() => handleLogout()}>Sair</span>
      </header>
    </Container>
  );
}

export default withRouter(Header);

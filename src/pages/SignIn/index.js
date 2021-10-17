import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container, LogoContainer, InputWrapper } from "./styles";

import Logo from "../../components/Logo";

class SignIn extends Component {
  state = {
    username: "@admiN",
    password: "h3LL0_WoR1D!",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    if (!username || !password) {
      this.setState({ error: "All fields are required!" });
    } else {
      try {
        const response = await api.post("/auth", { username, password });

        login(response.data.token);
        this.props.history.push("/dashboard");
      } catch (err) {
        this.setState({
          error: "Check your credentials...",
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn} className="drop-shadow">
          <LogoContainer>
            <Logo width="100%" />
          </LogoContainer>

          {this.state.error && <p>{this.state.error}</p>}

          <InputWrapper>
            <input
              type="username"
              placeholder="Username"
              value="@admiN"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value="h3LL0_WoR1D!"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </InputWrapper>

          <button type="submit">Login</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);

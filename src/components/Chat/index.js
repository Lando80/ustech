import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./style.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      data_nacimento: "",
      cpf: "",
      email: "",
      telefone: "",
      rg: "",
      cep: "",
    };
  }

  componentDidMount() {
    addResponseMessage("Olá, eu sou a Mia.");
    addResponseMessage("Qual é o seu nome?");
  }

  handleNewUserMessage = (newMessage) => {
    this.$nome = newMessage;
    if ((this.$nome = !"")) {
      addResponseMessage("Olá, " + newMessage);
    }

    switch (newMessage) {
      case "1":
        addResponseMessage("OláLucas Cavalcante " + newMessage);
        addResponseMessage("Rodrigo Carvalho");
        addResponseMessage("Magvinier Jr");
        addResponseMessage("Dinara Araújo");
        addResponseMessage("Digite 2 para acessar o menu de opções.");
        break;
      case "2":
        addResponseMessage("Para saber a profissão de cada um, Digite 3");
        addResponseMessage("Para Finalizar acesso, Digite 5");
        break;
      case "3":
        addResponseMessage("Lucas: Desenvolvedor Web");
        addResponseMessage("Rodrigo: Engenheiro de Testes");
        addResponseMessage("Dinara: Engenheria de Testes");
        addResponseMessage("Magvinier: Bancário");
        addResponseMessage("Para Finalizar acesso, Digite 5");
        break;
      case "5":
        alert("Obrigado Pelo Acesso ");
        break;
    }

    console.log(newMessage);
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="MIA"
          subtitle="Sua Assistente Virtual"
        />
      </div>
    );
  }
}
export default Chat;

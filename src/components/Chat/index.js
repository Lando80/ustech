import React, { useEffect, useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./style.css";

import api from "../../services/api";

function Chat() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");

  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState("");

  const createContributor = async () => {
    try {
      const res = await api.post("/contributor", { nome, cpf });
      alert(res.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const updateContributor = (path) => {
    console.log(path);
  };

  useEffect(() => {
    addResponseMessage("Olá, eu sou a Mia.");
    addResponseMessage("Qual é o seu nome?");
  }, []);

  useEffect(() => {
    if (cpf) createContributor();
    if (email) updateContributor("email");
    if (phone) updateContributor("phone");
    if (cep) updateContributor("cep");
  }, [index]);

  const handleNewUserMessage = (newMessage) => {
    if (index === 0) {
      setNome(newMessage);
      addResponseMessage("Olá, " + newMessage);
      addResponseMessage("Informe seu CPF");
    }

    if (index === 1) {
      setCpf(newMessage);
    }

    if (index === 2) {
      addResponseMessage(response);
    }

    setIndex(index + 1);
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="MIA"
        subtitle="Sua Assistente Virtual"
      />
    </div>
  );
}

export default Chat;

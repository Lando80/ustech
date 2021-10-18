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

  const [_id, setId] = useState("");

  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState("");

  const createContributor = async () => {
    try {
      const res = await api.post("/contributor", { nome });
      setResponse(res.data.message);
      setId(res.data._id);
    } catch (error) {
      setResponse(error.response.data.message);
    }
  };

  const updateContributor = async (key, value) => {
    try {
      let obj = {};
      obj[key] = value;

      let res;
      if (key === "cpf") {
        console.log("CPF executado");
        obj["_id"] = _id;
        res = await api.put(`/contributor/${key}`, obj);
      } else {
        obj["cpf"] = cpf;
        res = await api.put(`/contributor/${key}`, obj);
        console.log(`${key} executado`);
      }

      setResponse(res.data.message);
    } catch (error) {
      setResponse(error.response.data.message);
    }
  };

  useEffect(() => {
    addResponseMessage("Olá, eu sou a Mia.");
    addResponseMessage("Qual é o seu nome?");
  }, []);

  useEffect(() => {
    console.log(index);
    if (nome) createContributor();
    if (cpf && index === 2) updateContributor("cpf", cpf);
    if (email && index === 3) updateContributor("email", email);
    if (phone && index === 4) updateContributor("phone", phone);
    if (cep && index === 5) updateContributor("cep", cep);
  }, [index]);

  useEffect(() => {
    if (response) {
      addResponseMessage(response);
      console.log("Response: " + response);
    }
  }, [response]);

  const handleNewUserMessage = (newMessage) => {
    if (index === 0) {
      setNome(newMessage);
      addResponseMessage("Olá, " + newMessage);
    }
    if (index === 1) {
      setCpf(newMessage);
    }
    if (index === 2) {
      setEmail(newMessage);
    }
    if (index === 3) {
      setPhone(newMessage);
    }
    if (index === 4) {
      setCep(newMessage);
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

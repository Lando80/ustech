import React, { useEffect, useState } from "react";
import {
  Widget,
  addResponseMessage,
  toggleInputDisabled,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./style.css";
import avatar from "../../assets/avatar.jpeg";

import api from "../../services/api";

function Chat() {
  const [contributor, setContributor] = useState({
    _id: "",
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    cep: "",
    numero: "",
  });

  const [conversation, setConversation] = useState({
    userMessage: "",
    botResponse: "",
    messageIndex: 0,
  });

  useEffect(() => {
    initialConversation();
  }, []);

  const initialConversation = () => {
    addResponseMessage("Olá, eu sou a MIA 🤗");
    addResponseMessage("Como você se chama?");
  };

  const createContributor = async () => {
    const nome = conversation.userMessage;

    try {
      const res = await api.post("/contributor", { nome });

      setConversation((prev) => ({
        ...prev,
        botResponse: res.data.message,
        messageIndex: prev.messageIndex + 1,
      }));

      const { _id } = res.data;

      setContributor((prev) => ({ ...prev, nome, _id }));
    } catch (error) {
      let { response } = error;

      if (response.status === 500) {
        addResponseMessage(
          "Ops... Parece que estou com um probleminha em meu servidor 😯"
        );
        addResponseMessage("Volte daqui a poquinho, por favor 😅");
        return;
      }
      addResponseMessage(response.data.message);
    }
  };

  const updateContributor = async () => {
    // copiando o estado de contributor
    let obj = contributor;

    // criando um novo array para receber as chaves do objeto
    const keysCollection = [];
    for (const key in obj) {
      if (key === "_id") continue;
      keysCollection.push(key);
    }

    // pegando o campo atual de acordo com a posição do index
    const currentKey = keysCollection[conversation.messageIndex];

    // pegando o valor que o usuario informou para o campo atua
    const value = conversation.userMessage;

    try {
      let res = "";

      // caso o user esteja no cpf, tambem precisamos informar o id dele
      if (currentKey === "cpf") {
        res = await api.put(`/contributor/${currentKey}`, {
          _id: contributor._id,
          [currentKey]: value,
        });
      }
      // caso nao, precisamos informar o campo atual + o cpf
      else {
        res = await api.put(`/contributor/${currentKey}`, {
          [currentKey]: value,
          cpf: contributor.cpf,
        });
      }

      // se tudo der certo, vamos atualizar o estado da conversa
      // adicionamos a resposta da requisicao na botResponse e atualizamos o index
      setConversation((prev) => ({
        ...prev,
        botResponse: res.data.message,
        messageIndex: prev.messageIndex + 1,
      }));

      // e tambem atualizamos o estado do contribuinte de forma dinamica
      setContributor((prev) => ({ ...prev, [currentKey]: value }));
    } catch (error) {
      let { response } = error;

      // caso ocorra algum erro no servidor...
      if (response.status === 500) {
        addResponseMessage(
          "Ops... Parece que estou com um probleminha em meu servidor 😯"
        );
        addResponseMessage("Volte daqui a poquinho, por favor 😅");
        return;
      }

      // caso o usuario tenha informado algum valor invalido para o campo atual
      addResponseMessage(response.data.message);
    }
  };

  const handleNewUserMessage = (userMessage) => {
    // sempre que o usuario enviar uma nova mensagem, atualizamos o estado da userMessage
    setConversation((prev) => ({
      ...prev,
      userMessage,
    }));
  };

  // e toda vez que a userMessage for atualizada, chamaremos a requisicao de acordo com o index
  useEffect(() => {
    if (conversation.messageIndex > 5) {
      setTimeout(() => {
        addResponseMessage(
          `Foi um prazer conversar com você, ${
            contributor.nome.split(" ")[0]
          } 😊`
        );
        addResponseMessage("Até mais 🙋‍♀️");
        toggleInputDisabled();
      }, 1500);

      return;
    }

    // caso o index == 0, criamos o contribuinte no banco
    if (conversation.userMessage && conversation.messageIndex === 0)
      createContributor();
    //caso nao, atualizamos os outros dados
    if (conversation.userMessage && conversation.messageIndex > 0)
      updateContributor();
  }, [conversation.userMessage]);

  useEffect(() => {
    // sera executado quando a resposta do bot for atualizado pela requisicao
    if (conversation.botResponse) {
      addResponseMessage(conversation.botResponse);

      setConversation((prev) => ({
        ...prev,
        botResponse: "",
      }));

      if (conversation.messageIndex === 6) {
        setConversation((prev) => ({ ...prev, userMessage: "Tchau" }));
      }
    }
  }, [conversation.botResponse]);

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="MIA"
        subtitle="Sua Assistente Virtual"
        profileAvatar={avatar}
      />
    </div>
  );
}

export default Chat;

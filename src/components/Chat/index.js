import React, { useEffect, useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./style.css";

import api from "../../services/api";

function Chat() {
  const [contributor, setContributor] = useState({
    _id: "",
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    cep: "",
  });

  const [conversation, setConversation] = useState({
    userMessage: "",
    botResponse: "",
    messageIndex: 0,
  });

  useEffect(() => {
    addResponseMessage("Olá, eu sou a MIA 🤗");
    addResponseMessage("Como você se chama?");
  }, []);

  const createContributor = async () => {
    const nome = conversation.userMessage;

    try {
      const res = await api.post("/contributor", { nome });

      setConversation((prev) => ({
        ...prev,
        botResponse: res.data.message,
        messageIndex: prev.messageIndex + 1,
      }));

      setContributor((prev) => ({ ...prev, nome }));
    } catch (error) {
      let { response } = error;
      if (response.status === 400) addResponseMessage(response.data.message);
      else console.log(error);
    }
  };

  const handleNewUserMessage = (userMessage) => {
    setConversation((prev) => ({
      ...prev,
      userMessage,
    }));
  };

  useEffect(() => {
    if (conversation.userMessage && conversation.messageIndex === 0)
      createContributor();
    else console.log("Funcao de update");
  }, [conversation.userMessage]);

  useEffect(() => {
    if (conversation.botResponse) {
      addResponseMessage(conversation.botResponse);

      setConversation((prev) => ({
        ...prev,
        botResponse: "",
      }));
    }
  }, [conversation.botResponse]);

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

import React, { useEffect, useState } from "react";
import {
  Widget,
  setQuickButtons,
  addResponseMessage,
  addUserMessage,
  toggleInputDisabled,
  toggleWidget,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./style.css";
import avatar from "../../assets/avatar.jpeg";

import api from "../../services/api";

export default function Chat() {
  const [contributor, setContributor] = useState({
    cpf: "",
    "data-nasc": "",
    nome: "",
    email: "",
    telefone: "",
    cep: "",
  });

  const [conversation, setConversation] = useState({
    makeRequest: false,
    botResponse: "",
    userMessage: "",
    userOption: "",
    intent: "",
    init: true,
    presentation: true,
  });

  const createContributor = async () => {
    const { cpf } = contributor;
    const dataNasc = contributor["data-nasc"];

    try {
      const res = await api.post("/contributor", {
        cpf,
        ["data-nasc"]: dataNasc,
      });

      const { messages, status } = res.data;

      setConversation((prev) => ({
        ...prev,
        intent: status.nextIntent,
      }));

      messages.map((message, index) => {
        setTimeout(() => {
          addResponseMessage(message);
        }, 500 * index);
      });
    } catch (err) {
      const { data } = err.response;

      if (typeof data.message === "string") {
        addResponseMessage(data.message);
      } else {
        data.error.map((message) => {
          addResponseMessage(message);
        });
      }

      setConversation((prev) => ({ ...prev, intent: "completed" }));
    }
  };

  const storeNewData = async () => {
    const { intent } = conversation;
    const value = contributor[intent];

    const data = {
      intent,
      data: value,
    };

    const headers = {
      cpf: contributor.cpf,
      "data-nasc": contributor["data-nasc"],
    };

    try {
      const res = await api.post("/contributor/data", data, { headers });

      const { messages, status } = res.data;

      messages.map((message, index) => {
        setTimeout(() => {
          addResponseMessage(message);
        }, 500 * index);
      });

      setConversation((prev) => ({
        ...prev,
        intent: status.nextIntent || "completed",
      }));
    } catch (err) {
      const { data } = err.response;

      if (typeof data.message === "string") {
        addResponseMessage(data.message);
      } else {
        data.message.map((message, index) => {
          setTimeout(() => {
            addResponseMessage(message);
          }, 500 * index);
        });
      }
    }
  };

  const updateContributor = async () => {
    const { intent } = conversation;
    const value = contributor[intent];

    const data = {
      intent,
      data: value,
    };

    const headers = {
      cpf: contributor.cpf,
      "data-nasc": contributor["data-nasc"],
    };

    try {
      const res = await api.put("/contributor/data", data, { headers });

      const { message } = res.data;

      setTimeout(() => {
        addResponseMessage(message);
      }, 500);
    } catch (err) {
      const { data } = err.response;

      if (typeof data.message === "string") {
        addResponseMessage(data.message);
      } else {
        data.message.map((message, index) => {
          setTimeout(() => {
            addResponseMessage(message);
          }, 500 * index);
        });
      }
    }

    setConversation((prev) => ({
      ...prev,
      intent: "completed",
    }));
  };

  const getContributor = async () => {
    const config = {
      headers: {
        cpf: contributor.cpf,
        "data-nasc": contributor["data-nasc"],
      },
    };
    try {
      const res = await api.get("/contributor", config);

      const { message, firstName } = res.data;

      addResponseMessage(`Olá, ${firstName} 😊`);

      if (conversation.userOption === "Atualizar") {
        addResponseMessage("Quais dados voce quer atualizar?");
        toggleInputDisabled();
        return;
      }

      addResponseMessage("Estes são seus dados cadastrados 📁");

      message.map((msg) => addResponseMessage(msg));
      setConversation((prev) => ({ ...prev, intent: "completed" }));
    } catch (err) {
      const { data } = err.response;

      if (typeof data.message === "string") {
        addResponseMessage(data.message);
      } else {
        data.message.map((message, index) => {
          setTimeout(() => {
            addResponseMessage(message);
          }, 500 * index);
        });
        setConversation((prev) => ({ ...prev, intent: "completed" }));
      }
    }
  };

  const initConversation = () => {
    toggleInputDisabled();

    if (conversation.presentation) {
      addResponseMessage("Olá, eu sou a MIA 🤗");
      addResponseMessage("Como posso te ajudar?");
    } else {
      addResponseMessage("Posso te ajudar com mais alguma coisa? 🙋‍♀️");
    }
    setQuickButtons([
      { label: "Cadastrar dados", value: "Cadastrar dados" },
      { label: "Atualizar dados", value: "Atualizar dados" },
      { label: "Mostrar dados", value: "Mostrar dados" },
    ]);
  };

  const handleNewUserMessage = (userMessage) => {
    if (conversation.intent === "cpf") {
      setContributor((prev) => ({ ...prev, cpf: userMessage }));
      setConversation((prev) => ({ ...prev, intent: "data-nasc" }));
      return;
    }

    if (conversation.intent === "data-nasc") {
      setContributor((prev) => ({ ...prev, ["data-nasc"]: userMessage }));
      setConversation((prev) => ({ ...prev, makeRequest: true, userMessage }));
      return;
    }

    setContributor((prev) => ({ ...prev, [conversation.intent]: userMessage }));
    setConversation((prev) => ({ ...prev, userMessage }));
  };

  const handleUserOption = (userOption) => {
    setQuickButtons([]);
    addUserMessage(userOption);
    toggleInputDisabled();

    if (conversation.userOption === "Atualizar") {
      setConversation((prev) => ({
        ...prev,
        userOption: "update",
        intent: userOption,
      }));

      addResponseMessage(`Digite o seu novo ${userOption.toUpperCase()} 🤗`);
      return;
    }

    setConversation((prev) => ({
      ...prev,
      userOption: userOption.split(" ")[0],
      userMessage: true,
      intent: "cpf",
    }));
  };

  useEffect(() => {
    const { intent } = conversation;
    if (intent === "cpf" && !conversation.botResponse) {
      addResponseMessage("Vou precisar do seu CPF 😉");
      return;
    }

    if (intent === "data-nasc") {
      addResponseMessage("Agora informe sua data de nascimento 😊");
      return;
    }

    if (intent === "completed") {
      // reinicia a conversa quando completa uma task
      setTimeout(() => {
        setConversation({
          makeRequest: false,
          botResponse: "",
          userMessage: "",
          userOption: "",
          intent: "",
          presentation: false,
          init: true,
        });
      }, 2000);
    }
  }, [conversation.intent]);

  useEffect(() => {
    const { makeRequest, userOption, intent } = conversation;

    if (makeRequest) {
      switch (userOption) {
        case "Cadastrar":
          if (intent === "cpf" || intent === "data-nasc") {
            createContributor();
          } else {
            storeNewData();
          }
          break;

        case "Atualizar":
          getContributor();
          setQuickButtons([
            { label: "Email", value: "email" },
            { label: "Whatsapp", value: "telefone" },
            { label: "CEP", value: "cep" },
          ]);
          break;

        case "update":
          updateContributor();
          break;

        case "Mostrar":
          getContributor();
          break;

        default:
          break;
      }
    }
  }, [conversation.userMessage]);

  useEffect(() => {
    if (conversation.init) {
      initConversation(); // start conversation
      setConversation((prev) => ({ ...prev, init: false }));
    }
  }, [conversation.init]);

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        handleQuickButtonClicked={handleUserOption}
        title="Fale com a MIA"
        subtitle=""
        profileAvatar={avatar}
        senderPlaceHolder="Digite sua resposta"
      />
    </div>
  );
}

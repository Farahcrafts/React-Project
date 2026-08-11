import { useState } from "react";
import loadingSpinner from "../../assets/loading-spinner.gif";
import "./chatInput.css";
import { Chatbot } from "supersimpledev";

//1.Function ChatInput
export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //1.a saveInputText
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  //1.b  send soit b button wla b enter key
  async function send() {
    //if the input is empty or the robot is already loading don't do antg
    if (inputText === "" || isLoading === true) {
      return;
    }

    //else ghadi twli loading
    setIsLoading(true);

    //... spread operator
    //update the messages
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    //to clear the input box after typing in it
    setInputText("");
    //to update the user that the response is loading
    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={loadingSpinner} className="loading-spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    //get the correspondant response
    const response = await Chatbot.getResponseAsync(inputText);
    //generate the message in html
    setChatMessages(
      //... spread operator
      [
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ],
    );
    //nrdo isLoading false mora mayjawb robot
    setIsLoading(false);
  }
  function pressKey(event) {
    if (event.key === "Enter") {
      send();
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={pressKey}
        value={inputText}
        className="chat-input"
      />
      <button className="send-button" onClick={send}>
        Send
      </button>
    </div>
  );
}

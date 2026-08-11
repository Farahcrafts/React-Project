import { useState } from "react";
import { Chatbot } from "supersimpledev";

import { ChatMessage } from "./components/chatMessage/ChatMessage";
import ChatMessages from "./components/chatMessages/ChatMessages";
import { ChatInput } from "./components/chatInput/ChatInput";

import "./App.css";

//App function
function App() {
  // const array = useState([
  //   { message: "hello chatbot", sender: "user", id: "id1" },
  //   { message: "Hello, how can I help you?", sender: "robot", id: "id2" },
  //   { message: "can you get me todays date?", sender: "user", id: "id3" },
  //   { message: "Today is June 29", sender: "robot", id: "id4" },
  // ]);
  //the initial state of the array
  // const chatMessages = array[0];
  //update the html
  // const setChatMessages = array[1];

  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-msg">
          Welcome to the chatbot project! Send a message using the textbox
          bellow!
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        setChatMessages={setChatMessages}
        chatMessages={chatMessages}
      />
    </div>
  );
}

export default App;

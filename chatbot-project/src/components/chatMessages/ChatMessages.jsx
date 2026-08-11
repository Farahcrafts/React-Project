import { useAutoScroll } from "../../hooks/useAutoScroll";
import { ChatMessage } from "../chatMessage/ChatMessage";
import "./ChatMessages.css";

//3. Function ChatMessages
function ChatMessages({ chatMessages }) {
  //we create a ref
  const chatMessagesRef = useAutoScroll([chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((element) => {
        return (
          <ChatMessage
            message={element.message}
            sender={element.sender}
            key={element.id}
          />
        );
      })}
    </div>
  );
}
export default ChatMessages;

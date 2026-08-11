import robotProfilePicture from "../../assets/robot.png";
import userProfilePicture from "../../assets/user.png";
import "./ChatMessage.css";

//2. Function ChatMessage
export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  //intead of duplicating the code we use this
  return (
    <div
      className={sender === "user" ? "chat-user-message" : "chat-robot-message"}
    >
      {sender === "robot" && (
        <img
          src={robotProfilePicture}
          alt="user"
          className="chat-message-profile"
        />
      )}
      <p className="chat-bubble">{message}</p>
      {sender === "user" && (
        <img
          src={userProfilePicture}
          alt="user"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}

import { useEffect } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import "./ContactMeChat.css";
import { Close, Minimize, Send } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";

export const ContactMeChat = () => {
  const {
    handleToggleContactMeChat,
    handleToggleMinimizeChat,
    handleInputChangeChat,
    handleSendMessage,
    chatBot,
    inputRef,
    inputValue,
    IsMinimizeChat,
    
  } = usePortfolio();

  useEffect(() => {
    localStorage.setItem("chatBot", JSON.stringify(chatBot));
  }, [chatBot]);

  return (
    <div
      className={`contact-me-chat ${
        IsMinimizeChat ? "chat-minimized-animation" : "chat-opened"
      } `}
    >
      <div className="contact-me-chat-header">
        <h2>Contact Me Chat</h2>

        <div className="contact-me-chat-header-buttons">
          <Button onClick={() => handleToggleMinimizeChat()}>
            <Minimize />
          </Button>
          <Button onClick={() => handleToggleContactMeChat()}>
            <Close />
          </Button>
        </div>
      </div>
      <div className="contact-me-chat-body">
        <p className="contact-me-chat-main-message">{chatBot.mainMessage}</p>
        {/* Render all chat messages dynamically */}
        {chatBot.chat.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.sender === "bot"
                ? "contact-me-chat-message-me"
                : "contact-me-chat-message-sender"
            }
          >
            <Avatar
              src={
                msg.sender === "bot"
                  ? "/robot-avatar-chat.png"
                  : "/user-avatar.png"
              }
              alt={msg.sender === "bot" ? "User Avatar" : "Bot Avatar"}
              className="contact-me-chat-avatar"
            />
            <p className={msg.sender === "bot" ? "me" : "sender"}>
              {msg.message}
            </p>
          </div>
        ))}
      </div>
      {chatBot.errorMessage && (
        <div className="contact-me-chat-error-message animate__animated animate__bounceIn">
          <p>{chatBot.errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="contact-me-chat-input">
        <input
          autoFocus
          ref={inputRef}
          disabled={chatBot.isChatOver}
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChangeChat}
        />
        <Button type="submit" disabled={chatBot.isChatOver}>
          <Send />
        </Button>
      </form>
    </div>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { onToggleContactMeChat, onToggleMinimizeChat } from "../redux/uiSlice";
import {
  setCertificateActive,
  setCertifications,
  setSkills,
  setSkillActive,
  setInitialAppState,
  setCurrentThemeActive,
  setCurrentArticleTitle,
} from "../redux/portfolioSlice";
import { useRef, useState } from "react";

const initialConversation = {
  mainMessage:
    "Hello! I am always open to new opportunities and collaborations. If you have any questions or just want to say hi, please fill out the form below.",
  chat: [
    {
      sender: "bot",
      message: "What is your name?",
    },
  ],
  errorMessage: null,
  isLoading: false,
  isChatOver: false,
};

export const usePortfolio = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // States
  const [chatBot, setChatBot] = useState(
    JSON.parse(localStorage.getItem("chatBot")) || initialConversation
  );
  const [inputValue, setInputValue] = useState("");
  // Selectors
  const {
    currentArticleTitle,
    certifications,
    certificateActive,
    skills,
    initialAppState,
  } = useSelector((state) => state.portfolio);
  const { IsContactMe, IsMinimizeChat } = useSelector((state) => state.ui);

  console.log(chatBot);

  // Function to handle menu toggle
  const handleNavToArticle = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    const menuList = document.querySelector(".nav-bar-items-list");
    menuList.style.display = "none";
    setIsMenuOpen(false);
  };

  const handleOpenMenu = () => {
    const menuList = document.querySelector(".nav-bar-items-list");

    if (isMenuOpen) {
      menuList.style.display = "none";
      menuList.classList.remove("nav-bar-items-list-active");
    } else {
      menuList.style.display = "flex";
      menuList.classList.add("nav-bar-items-list-active");
    }

    setIsMenuOpen(!isMenuOpen);
  };

  function setTimeOutFC(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleInitialAppState = (initialAppState) => {
    dispatch(setInitialAppState(initialAppState));
  };

  const handleCurrentArticleTitle = (currentArticleTitle) => {
    dispatch(setCurrentArticleTitle(currentArticleTitle));
  };

  const handleCurrentThemeActive = (currentThemeActive) => {
    dispatch(setCurrentThemeActive(currentThemeActive));
  };

  // Function to handle sending messages
  const handleInputChangeChat = (e) => {
    setChatBot({ ...chatBot, errorMessage: null });
    setInputValue(e.target.value);
  };
  const inputRef = useRef(null);
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (inputRef.current) {
      inputRef.current.focus();
    }

    setChatBot({ ...chatBot, errorMessage: null });
    // If the chat is over, do not allow sending new messages
    if (chatBot.isChatOver) {
      setChatBot({ ...chatBot, errorMessage: "Chat is already over." });
      return;
    } else if (inputValue.trim() === "") {
      setChatBot({ ...chatBot, errorMessage: "Message cannot be empty." });

      return;
    }

    // Find the last bot message from chatBot.chat
    const lastBotMessage = [...chatBot.chat]
      .reverse()
      .find((msg) => msg.sender === "bot")?.message;

    let newMessage = { sender: "user", message: inputValue };
    let nextBotMessage = null;

    if (lastBotMessage === "What is your name?") {
      if (inputValue.length < 2) {
        setChatBot({
          ...chatBot,
          errorMessage: "Please enter a valid name ",
        });
        return;
      }

      newMessage.userName = inputValue;
      nextBotMessage =
        "Hello, " +
        inputValue +
        "! I hope you are doing well. What is your email address?";
    } else if (
      lastBotMessage ===
      "Hello, " + chatBot.chat[1].userName + "! What is your email address?"
    ) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setChatBot({ ...chatBot, errorMessage: "Invalid email address." });
        return;
      }

      newMessage.userEmail = inputValue;
      nextBotMessage = "Leave a comment.";
    } else if (lastBotMessage === "Leave a comment.") {
      if (inputValue.length < 5) {
        setChatBot({
          ...chatBot,
          errorMessage: "Please enter a comment with at least 5 characters.",
        });
        return;
      }

      newMessage.userComment = inputValue;
      nextBotMessage =
        "Thank you for your message! I will get back to you as soon as possible.";
      // Mark chat as over
      setChatBot({
        ...chatBot,
        isChatOver: true,
        errorMessage: null,
      });
    }

    setInputValue("");

    setChatBot((prev) => ({
      ...prev,
      chat: [
        ...prev.chat,
        newMessage,
        ...(nextBotMessage ? [{ message: nextBotMessage, sender: "bot" }] : []),
      ],
    }));
  };

  const handleToggleContactMeChat = () => {
    setChatBot(initialConversation);
    localStorage.removeItem("chatBot");
    dispatch(onToggleContactMeChat());
  };
  const handleToggleMinimizeChat = () => {
    dispatch(onToggleMinimizeChat());
    // Save the current chat state to localStorage when minimizing
    localStorage.setItem("chatBot", JSON.stringify(chatBot));
    setChatBot({ ...chatBot, errorMessage: null, isChatOver: false });
  };

  const handleSkills = (skills) => {
    dispatch(setSkills(skills));
  };
  const handleSkillsActive = (skillActive) => {
    dispatch(setSkillActive(skillActive));
  };

  const handleProjects = () => {
    console.log("projects");
  };
  const handleCertifications = (certifications) => {
    dispatch(setCertifications(certifications));
  };

  const handleCertificateActive = (certificateActive) => {
    dispatch(setCertificateActive(certificateActive));
  };

  return {
    handleInitialAppState,
    handleCurrentArticleTitle,
    handleCurrentThemeActive,
    handleSkills,
    handleSkillsActive,
    handleProjects,

    handleCertifications,
    handleCertificateActive,
    handleToggleContactMeChat,
    handleToggleMinimizeChat,
    handleInputChangeChat,
    handleSendMessage,
    handleOpenMenu,
    handleNavToArticle,
    setTimeOutFC,
    chatBot,
    inputRef,
    inputValue,
    IsContactMe,
    IsMinimizeChat,
    certifications,
    certificateActive,
    initialAppState,
    currentArticleTitle,
    skills,
    isMenuOpen,
  };
};

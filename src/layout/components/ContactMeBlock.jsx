import { ButtonBase } from "@mui/material";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { usePortfolio } from "../../hooks/usePortfolio";
import { ContactMeChat } from "./ContactMeChat";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
export const ContactMeBlock = () => {
  const {
    handleToggleContactMeChat,
    handleToggleMinimizeChat,
    IsContactMe,
    IsMinimizeChat,
  } = usePortfolio();

  return (
    <div className="contact-me-button-container">
      {IsContactMe ? (
        IsMinimizeChat ? (
          <ButtonBase
            onClick={() => handleToggleMinimizeChat()}
            className="contact-me-button hidden md:block"
            sx={{
              position: "fixed",
              bottom: "5px",
              right: "20px",
              color: "#24ff00",
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              backgroundColor: "#0e0e10",
              border: "1px solid #3c3c3c",
              borderRadius: "10px",
              padding: "10px 20px",
              cursor: "pointer",
              zIndex: 1000,
              gap: "10px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                color: "#ffffff",

                transition: "all 0.3s ease-in-out",
                "& span": {
                  color: "#ffffff",
                  transition: "all 0.3s ease-in-out",
                },
              },
            }}
          >
            <MarkUnreadChatAltIcon
              sx={{
                fontSize: 30,
              }}
            />
          </ButtonBase>
        ) : (
          <ContactMeChat />
        )
      ) : (
        <div className="contact-me-button-wrapper">
          <span
            onClick={() => handleToggleContactMeChat()}
            className="contact-me-button"
          >
            <img
              src="/robot-waiving-chat.gif"
              alt=""
              className="robot-waiving"
            />
          </span>
        </div>
      )}
    </div>
  );
};

import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import { LinkedIn } from "@mui/icons-material";

const contactInfo = [
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/mc-portfolio/",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/miguelantonio96",
  },
  {
    name: "Resume",
    icon: <DescriptionIcon />,
    link: "https://github.com/miguelantonio96",
  },
];

export const ContactLinks = () => {
  const handleContactLinks = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="contact-links-container">
      {contactInfo.map((contact, idx) => (
        <button
          key={idx}
          className="contact-link-button"
          onClick={() => handleContactLinks(contact.link)}
        >
          {contact.icon}
        </button>
      ))}
    </div>
  );
};

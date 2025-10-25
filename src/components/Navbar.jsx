import MenuIcon from "@mui/icons-material/Menu";

import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

const initialValue = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Certifications",
    path: "#certifications",
  },
  {
    name: "Experiences",
    path: "#experiences",
  },
  {
    name: "Projects",
    path: "#projects",
  },
];

export const Navbar = () => {
  const { currentArticleTitle } = usePortfolio();
 
  const handleNavToArticle = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenMenu = () => {
    console.log("Open Menu");
  };


  return (
    <motion.header
      className="nav-bar-container w-full h-16"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <nav className="nav-bar-content">
        {initialValue.map((item) => (
          <div
            key={item.name}
            className={`nav-bar-item ${
              item.name === currentArticleTitle ? "nav-bar-item-active" : ""
            }`}
            onClick={() => handleNavToArticle(item.path)}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* menu button */}
      <button
        onClick={() => handleOpenMenu()}
        className="menu-button md:hidden"
        style={{
          position: "absolute",
          right: 10,
          alignItems: "center",
          fontWeight: "bold",
          backgroundColor: "#087ea4",
          borderRadius: "10px",
          gap: "5px",
          padding: "5px 10px",
          "&:hover": {
            color: "#53d5d9",
            backgroundColor: "#b07b46",
            transition: "all 0.3s ease-in-out",
            "&:hover span": {
              color: "rgb(0, 0, 0)",
            },
          },
        }}
      >
        <MenuIcon sx={{ fontSize: 40, color: "#3c3c3c" }} />
      </button>
    </motion.header>
  );
};

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  const {
    currentArticleTitle,
    handleNavToArticle,
    handleOpenMenu,
    isMenuOpen,
  } = usePortfolio();

  return (
    <motion.header
      className="nav-bar-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
      <nav className="nav-bar-content">
        {/* nav bar items */}
        <ul className="nav-bar-items-list">
          {initialValue.map((item) => (
            <li
              key={item.name}
              className={`nav-bar-item ${
                item.name === currentArticleTitle ? "nav-bar-item-active" : ""
              }`}
              onClick={() => handleNavToArticle(item.path)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        {/* menu button */}
        <button
          onClick={() => handleOpenMenu()}
          className="menu-button"
          style={{
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
          {
            <span>
              {isMenuOpen ? (
                <CloseIcon sx={{ fontSize: 30 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 40 }} />
              )}
            </span>
          }
        </button>
      </nav>
    </motion.header>
  );
};

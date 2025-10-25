import { ContactLinks } from "./ContactLinks";
import { WelcomeText } from "../layout/components/WelcomeText";
import { motion } from "framer-motion";

// const titleList = [
//   { title: "Frontend Developer" },
//   { title: "Backend Developer" },
//   { title: "Fullstack Developer" },
// ];

export const SideBarLeftHome = () => {
  return (
    <motion.aside
      className="side-bar-left-home-container"
      initial={{ opacity: 0, transform: "translateX(-100%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(-100%)" }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <div className="side-bar-left-home-content">
        {/* Welcome text */}
        <WelcomeText />

        {/* Contact links */}
        <ContactLinks />
      </div>
    </motion.aside>
  );
};

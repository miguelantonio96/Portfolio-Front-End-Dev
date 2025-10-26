
import { SideBarLeftHome, SideBarRightHome } from "../components";
import { useEffect, useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { HomeScrollUpButton } from "./components/HomeScrollUpButton";
import { ColorsThemeSelector } from "./components/ColorsThemeSelector";

const initialAppState = [
  {
    name: "HTML",
    icon: "public/html-5.png",
    color: "#fc490bc7",
    colorSecondary: "#333",
    textColor: "#333",
    textColorSecondary: "#666",
    backgroundApp:
      "linear-gradient(135deg, #000000 0%, #140e2e 50%, #000000 100%)",
    background: "#f8f8f8",
    backgroundSecondary: "#f8f8f8",
    intro: "Fundamental markup language for the web.",
    description:
      "I master web page structure using semantic HTML, ensuring accessibility, content hierarchy, and best practices. I focus on building solid foundations for modern applications, optimizing SEO and user experience.",
  },
  {
    name: "CSS",
    icon: "public/css-3.png",
    color: "#2196f3",
    colorSecondary: "#2965f1",
    textColor: "#333",
    textColorSecondary: "#666",
    backgroundApp:
      "linear-gradient(135deg, #1a1a1a 0%, #0d1b2a 50%, #1a1a1a 100%)",
    background: "#f8f9fa",
    backgroundSecondary: "#f1f1f1",
    intro: "I style web interfaces with precision and creativity.",
    description:
      "I use CSS to design attractive and responsive interfaces, applying Flexbox, Grid, and advanced layout techniques. I specialize in creating adaptable layouts, animations, and custom styles that enhance usability and visual appeal.",
  },
  {
    name: "JavaScript",
    icon: "public/js-3.png",
    color: "#ffd300",
    colorSecondary: "#000",
    textColor: "#111",
    textColorSecondary: "#444",
    backgroundApp:
      "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)",
    background: "#fffde7",
    backgroundSecondary: "#fff9c4",
    intro: "I add interactivity and dynamism to web applications.",
    description:
      "I program dynamic functionalities with JavaScript, manipulating the DOM, handling events, and consuming APIs. I have experience in business logic, validations, and performance optimization for scalable applications.",
  },
  {
    name: "React",
    icon: "public/React-icon.png",
    color: "#087fa3",
    colorSecondary: "#20232a",
    textColor: "#222",
    textColorSecondary: "#555",
    backgroundApp:
      "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)",
    background: "#e6f7ff",
    backgroundSecondary: "#ccf2ff",
    intro: "I develop modern and reactive interfaces with React.",
    description:
      "I build web applications using React, leveraging reusable components, hooks, and efficient state management. I implement advanced patterns and best practices to create smooth and maintainable user experiences.",
  },
  {
    name: "TypeScript",
    icon: "public/TS-typeScript.png",
    color: "#3178c6",
    colorSecondary: "#2f74c0",
    textColor: "#222",
    textColorSecondary: "#555",
    backgroundApp:
      "linear-gradient(135deg, #0e0e0e 0%, #1f1f1f 50%, #0e0e0e 100%)",
    background: "#f0f8ff",
    backgroundSecondary: "#e6f0ff",
    intro: "I use TypeScript to develop robust and maintainable code.",
    description:
      "I leverage TypeScript to write clean and efficient code, ensuring strong typing, advanced features, and improved development experience.",
  },

  {
    name: "Bootstrap",
    icon: "public/bootstrap.png",
    color: "#720ad3",
    colorSecondary: "#6f42c1",
    textColor: "#222",
    textColorSecondary: "#555",
    backgroundApp:
      "linear-gradient(135deg, #1a1a1a 0%, #2a0d2e 50%, #1a1a1a 100%)",
    background: "#f8f8ff",
    backgroundSecondary: "#f1f0ff",
    intro: "I use Bootstrap to accelerate interface development.",
    description:
      "I implement Bootstrap to create responsive and consistent interfaces, leveraging its component system and utilities. I customize styles and adapt the framework to specific project needs, ensuring cross-platform compatibility.",
  },
  {
    name: "GitHub",
    icon: "public/github.png",
    color: "#5c6bc0",
    colorSecondary: "#333",
    textColor: "#f5f5f5",
    textColorSecondary: "#ccc",
    backgroundApp:
      "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
    background: "#f8f8f8",
    backgroundSecondary: "#f1f1f1",
    intro: "I manage projects and collaborate in development teams.",
    description:
      "I work with Git and GitHub for version control, project collaboration, and open source contributions. I handle workflows with branches, pull requests, and conflict resolution to maintain code quality.",
  },
  {
    name: "MongoDB",
    icon: "public/mongoDB-icon.png",
    color: "#00ed64",
    colorSecondary: "#3c8d35",
    textColor: "#222",
    textColorSecondary: "#555",
    backgroundApp:
      "linear-gradient(135deg, #0e0e0e 0%, #1f1f1f 50%, #0e0e0e 100%)",
    background: "#f0f8ff",
    backgroundSecondary: "#e6f0ff",
    intro: "I use MongoDB to store and retrieve data.",
    description:
      "I develop applications using MongoDB, a document-based NoSQL database. I use MongoDB to store and retrieve data, ensuring scalability and performance.",
  },
  {
    name: "firebase",
    icon: "public/firebase-icon.png",
    color: "#ff9100",
    colorSecondary: "#e6f0ff",
    textColor: "#222",
    textColorSecondary: "#555",
    backgroundApp:
      "linear-gradient(135deg, #0e0e0e 0%, #1f1f1f 50%, #0e0e0e 100%)",
    background: "#f0f8ff",
    backgroundSecondary: "#e6f0ff",
    intro: "I use firebase to store and retrieve data.",
    description:
      "I develop applications using firebase, a cloud-based NoSQL database. I use firebase to store and retrieve data, ensuring scalability and performance.",
  },

  {
    name: "nodejs",
    icon: "public/nodejs-icon.png",
    color: "#326932",
    colorSecondary: "#3c8d35",
    textColor: "#222",
    textColorSecondary: "#555",
    backgroundApp:
      "linear-gradient(135deg, #0e0e0e 0%, #1f1f1f 50%, #0e0e0e 100%)",
    background: "#f0f8ff",
    backgroundSecondary: "#e6f0ff",
    intro: "I build server-side applications with Node.js and Express.",
    description:
      "I use Node.js to create scalable backend services, handling requests, routing, and middleware with Express. I integrate databases, authentication, and APIs to build full-stack applications with efficient server-side logic.",
  },
];
export const AppLayout = ({ children }) => {
 
  const { handleInitialAppState } = usePortfolio();
  const [isHomeOnView, setIsHomeOnView] = useState(false);
  const [stateApp, setStateApp] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setStateApp(initialAppState);
    handleInitialAppState(stateApp);
  }, [stateApp]);

  useEffect(() => {
    const handleScroll = () => {
      const isHomeOnView = window.scrollY >= 1000;
      setIsHomeOnView(isHomeOnView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-layout  flex justify-center relative">
      <SideBarLeftHome />

      {isHomeOnView && <ColorsThemeSelector />}

      {children}

      {isHomeOnView && <HomeScrollUpButton />}

      <SideBarRightHome />
    </div>
  );
};

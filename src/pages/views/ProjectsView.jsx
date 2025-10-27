import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projectsListed = [
  {
    id: crypto.randomUUID(),
    title: "E-Commerce web",
    description:
      "A web application that demonstrates modern UI/UX principles and responsive design.",
    image: "Projects/Screenshot 2025-08-16 170405.png",
    demo: "https://example.com/demo1",
    github: "https://github.com/miguelantonio96",
  },
  {
    id: crypto.randomUUID(),
    title: "Journal App",
    description:
      "An interactive dashboard for visualizing real-time data using React and Chart.js.",
    image: "Projects/Screenshot 2025-08-16 170703.png",
    demo: "https://example.com/demo2",
    github: "https://example.com/github2",
  },
  {
    id: crypto.randomUUID(),
    title: "Chat support App",
    description:
      "A task management tool that helps users organize and prioritize their work efficiently.",
    image: "Projects/Screenshot 2025-08-16 170913.png",
    demo: "https://example.com/demo3",
    github: "https://example.com/github3",
  },
  {
    id: crypto.randomUUID(),
    title: "Space App",
    description:
      "A portfolio website showcasing various frontend and backend development projects.",
    image: "Projects/spaceAppAvatar.png",
    demo: "https://example.com/demo4",
    github: "https://example.com/github4",
  },
  {
    id: crypto.randomUUID(),
    title: "Movies Web",
    description:
      "A weather app that provides real-time weather updates and forecasts for any location.",
    image: "Projects/Screenshot 2025-05-11 181241.png",
    demo: "https://example.com/demo5",
    github: "https://example.com/github5",
  },
  {
    id: crypto.randomUUID(),
    title: "Banking Web",
    description:
      "A blog platform where users can create, edit, and share articles with a rich text editor.",
    image: "Projects/aluraBankAvatar.png",
    demo: "https://example.com/demo6",
    github: "https://example.com/github6",
  },
];
export const ProjectsView = () => {
  const [projectActive, setProjectActive] = useState(projectsListed[0]);

  const handleProjectActive = (project) => {
    setProjectActive(project);
  };

  const handleGithubProject = (github) => {
    if (github) {
      console.error("GitHub link is not provided for this project.");
      return;
    }
  };

  const handleDemoProject = (demo) => {
    if (demo) {
      console.error("Demo link is not provided for this project.");
      return;
    }
  };

  return (
    <article className="projects-view-container" id="projects">
      <motion.div
        className="projects-view-content"
        initial={{ opacity: 0, transform: "rotate3d(1, 1, 0, 90deg)" }}
        whileInView={{ opacity: 1, transform: "rotate3d(0, 0, 0, 0deg)" }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <section className="projects-view-rows">
          <div className="projects-view-card-container">
            <ul className="projects-view-card-header">
              {projectsListed.map((project) => (
                <li
                  className={`projects-view-card-header-item ${
                    project.id === projectActive.id
                      ? "pv-card-header-item-active"
                      : ""
                  }`}
                  key={project.id}
                  onClick={() => handleProjectActive(project)}
                >
                  <span>{project.title}</span>
                </li>
              ))}
            </ul>
            <div className="projects-view-card-body">
              {projectActive && (
                <>
                  <AnimatePresence>
                    <motion.img
                      className="projects-view-card-image"
                      src={projectActive.image}
                      alt={projectActive.title}
                      key={projectActive.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>

                  <motion.div
                    className="projects-view-card-buttons"
                    key={projectActive.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <button
                      onClick={() => handleDemoProject(projectActive.demo)}
                    >
                      Demo
                    </button>

                    <button
                      onClick={() => handleGithubProject(projectActive.github)}
                    >
                      GitHub
                    </button>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      </motion.div>
    </article>
  );
};

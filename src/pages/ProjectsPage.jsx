import { useEffect, useState } from "react";
import { LoadingIcon } from "../ui/components/LoadingIcon";
import { ProjectDetail } from "./projects/components/ProjectDetail";



const projectsListed = [
  {
    id: crypto.randomUUID(),
    title: "E-Commerce web",
    description:
      "A web application that demonstrates modern UI/UX principles and responsive design.",
    image: "src/assets/Projects/Screenshot 2025-08-16 170405.png",
    demo: "https://example.com/demo1",
    github: "https://github.com/miguelantonio96",
  },
  {
    id: crypto.randomUUID(),
    title: "Journal App",
    description:
      "An interactive dashboard for visualizing real-time data using React and Chart.js.",
    image: "src/assets/Projects/Screenshot 2025-08-16 170703.png",
    demo: "https://example.com/demo2",
    github: "https://example.com/github2",
  },
  {
    id: crypto.randomUUID(),
    title: "Chat support App",
    description:
      "A task management tool that helps users organize and prioritize their work efficiently.",
    image: "src/assets/Projects/Screenshot 2025-08-16 170913.png",
    demo: "https://example.com/demo3",
    github: "https://example.com/github3",
  },
  {
    id: crypto.randomUUID(),
    title: "Space App",
    description:
      "A portfolio website showcasing various frontend and backend development projects.",
    image: "src/assets/Projects/spaceAppAvatar.png",
    demo: "https://example.com/demo4",
    github: "https://example.com/github4",
  },
  {
    id: crypto.randomUUID(),
    title: "Movies Web",
    description:
      "A weather app that provides real-time weather updates and forecasts for any location.",
    image: "src/assets/Projects/Screenshot 2025-05-11 181241.png",
    demo: "https://example.com/demo5",
    github: "https://example.com/github5",
  },
  {
    id: crypto.randomUUID(),
    title: "Banking Web",
    description:
      "A blog platform where users can create, edit, and share articles with a rich text editor.",
    image: "src/assets/Projects/aluraBankAvatar.png",
    demo: "https://example.com/demo6",
    github: "https://example.com/github6",
  },
];

export const ProjectsPage = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [projectActive, setProjectActive] = useState({});

 
  const InitialData = useEffect(() => {
    fetch("http://localhost:3001/projectsList")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  useEffect(() => {
    setProjectsList(InitialData || projectsListed);
  }, [InitialData]);

  const handleProjectClick = (project) => {
    setProjectActive(project);
  };

  return (
    <section className="projects-page-container min-h-screen">
      <aside className="projects-sidebar-container">
        <div className="projects-sidebar-header-container">
          <h2 className="projects-sidebar-title">My Projects</h2>
          <p className="projects-sidebar-description">
            Here are some of the projects I've worked on recently and some of my
            favorite ones that I'm proud of.
          </p>
        </div>
        <div className="projects-sidebar-cards-container">
          {projectsList.length > 0 ? (
            projectsList.map((project) => (
              <div
                className="projects-sidebar-card"
                onClick={() => handleProjectClick(project)}
                key={project.id}
              >
                <h3>{project.title}</h3>
                <img
                  className="projects-sidebar-image"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            ))
          ) : (
            <LoadingIcon />
          )}
        </div>
      </aside>
      <div className="projects-page-content w-full flex items-center">
        <div className="projects-detail-card-container">
          {projectActive.title ? (
            <ProjectDetail project={projectActive} />
          ) : (
            <div className="no-project-selected">
              <p>No project selected</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";

const projectsListed = [
  {
    title: "Web Applications For",
    projects: [
      {
        title: "HackSonDev LLC",
        description:
          "Web application for HackSonDev LLC, a company dedicated to providing software development services. The application features a dynamic blog, contact form, and dynamic portfolio section.",
      },
    ],
  },
  {
    title: "Personal Projects",
    projects: [
      {
        title: "E-Commerce website",
        description:
          "E-commerce website using React, TailwindCSS, and JavaScript. Features include product catalog, shopping cart, user authentication, and order management. Integrated with Stripe for secure payments and responsive design for mobile devices.",
      },
      {
        title: "Journal App",
        description:
          "Personal journal application built with React, TailwindCSS, and OpenWeather API. Allows users to create, edit, and delete journal entries, attach weather data to each entry, and search through past notes. Includes authentication and persistent storage.",
      },
      {
        title: "Chat support App",
        description:
          "Real-time chat support application using React, localStorage, and CSS modules. Enables users to send and receive messages instantly, supports multiple chat rooms, and stores chat history locally for persistence across sessions.",
      },
      {
        title: "Space App",
        description:
          "Space exploration app built with React, localStorage, and CSS modules. Users can browse information about planets, stars, and missions, bookmark favorites, and view interactive media. Data is cached locally for offline access.",
      },
      {
        title: "Movies Web",
        description:
          "Movie discovery platform using React, TailwindCSS, and OpenWeather API. Users can search for movies, view details, watch trailers, and save favorites. Responsive UI and integration with third-party movie databases.",
      },
      {
        title: "Banking Web",
        description:
          "Online banking web application developed with React, TailwindCSS, and OpenWeather API. Provides account management, transaction history, fund transfers, and secure login. Optimized for performance and accessibility.",
      },
    ],
  },
];

// const technologies = [
//   "/React-icon.png",
//   "/js-3.png",
//   "/tailwind-icon.png",
//   "/css-3.png",
//   "/html-5.png",
//   "/nodejs-icon.png",
//   "/mongoDB-icon.png",
//   "/firebase-icon.png",
// ];

export const ExperienceView = () => {
  // const [techIndex, setTechIndex] = useState(0);

  const handleProjectClick = (project) => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };


  return (
    <motion.article className="experience-container" id="experiences">
      <section className="experience-content-container">
        <div className="experience-content">
          {projectsListed.map((projectGroup, idx) => (
            <motion.div
              key={idx}
              className="experience-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1,
                type: "spring",
                ease: "easeInOut",
                delay: idx * 0.5,
              }}
            >
              <div className="experience-item-header">
                <h2>{projectGroup.title}</h2>
              </div>

              <div className="experience-item-body">
                <div className="experience-item-list-container">
                  {projectGroup.projects.map((project, index) => (
                    <motion.div
                      className="experience-item-list"
                      key={index}
                      viewport={{ once: true, amount: 0.5 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="experience-item-list-title">
                        <span>{project.title}</span>
                      </div>
                      <div className="experience-item-list-description">
                        <p>{project.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.article>
  );
};

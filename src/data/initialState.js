export const initialState = {
  homeView: [
    {
      name: "HTML",
      icon: "/html-5.png",
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
      icon: "/css-3.png",
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
      icon: "/js-3.png",
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
      icon: "/React-icon.png",
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
      icon: "/TS-typeScript.png",
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
      icon: "/bootstrap.png",
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
      icon: "/github.png",
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
      icon: "/mongoDB-icon.png",
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
      icon: "/firebase-icon.png",
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
      icon: "/nodejs-icon.png",
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
  ],
  sideLeftWords: {
    welcomeLetters: ["W", "E", "L", "C", "O", "M", "E"],
    frontendLetters: ["F", "R", "O", "N", "T", "E", "N", "D"],
  },

  aboutView: {
    title: "About Me",
    quote:
      "My vision is to create digital experiences that merge creativity and functionality, making technology more intuitive, accessible, and engaging for all users.",
    paragraph_1:
      "Hi! I&apos;m Miguel, a web developer passionate about creating attractive and functional digital experiences. I specialize in react, JavaScript, and modern design.",
    paragraph_2:
      "I enjoy solving complex problems and continuously learning new technologies to improve my skills. My goal is to build user-friendly interfaces that make a positive impact. When I&apos;m not coding, I like exploring new design trends and collaborating with other developers on exciting projects.",
  },
  certificationsView: [
    {
      platform: "Alura",
      courses: [
        {
          id: 1,
          name: "Programming Logic with JavaScript",
          description:
            "Certificate of completion for the training course in programming logic using JavaScript, provided by Alura.",
          image:
            "certificates/Formación Lógica de programación con JavaScript - Alura.pdf",
        },
        {
          id: 2,
          name: "Explore React with JavaScript",
          description:
            "Certificate of training in the fundamentals of React with JavaScript, covering components, state, and lifecycle.",
          image:
            "certificates/Formación Explora React con JavaScript - Alura.pdf",
        },
        {
          id: 3,
          name: "'My Career' Training - Alura",
          description:
            "Certificate of progress within the 'My Career' training offered by Alura, focused on professional development.",
          image: "certificates/Formación Mi carrera - Alura.pdf",
        },
        {
          id: 4,
          name: "Git and GitHub Course",
          description:
            "Certificate for the version control course using Git and GitHub, focused on collaborative workflows.",
          image: "certificates/Git y GitHub.pdf",
        },
        {
          id: 5,
          name: "React Router - SPA Course",
          description:
            "Certificate for the course on navigation in single-page applications (SPA) using React Router, provided by Alura.",
          image:
            "certificates/Curso React Router_ Navegación en una SPA - Alura.pdf",
        },
        {
          id: 6,
          name: "Alura Program Completed",
          description:
            "Official certificate of completion for the full study program on the Alura platform.",
          image:
            "certificates/Miguel Antonio Casado Perez - Programa Alura finalizado.pdf",
        },
      ],
    },
    {
      platform: "Udemy",
      courses: [
        {
          id: 7,
          name: "Modern JavaScript - Udemy",
          description:
            "Course on modern JavaScript with ES6+, async programming, and best practices.",
          image: "",
        },
        {
          id: 8,
          name: "Complete React with Hooks and Context - Udemy",
          description:
            "React course with practical projects using hooks, context API, and routing.",
          image: "certificates/React Completo Hooks Context - Udemy.pdf",
        },
        {
          id: 9,
          name: "Node.js and Express from Scratch - Udemy",
          description:
            "Certificate for the practical course on Node.js and Express to build REST APIs.",
          image: "certificates/Node Express desde Cero - Udemy.pdf",
        },
      ],
    },
  ],

  experienceView: [
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
  ],

  projectsView: [
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
  ],
};

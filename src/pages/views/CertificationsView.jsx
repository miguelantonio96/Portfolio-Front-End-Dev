import { useContext, useEffect, useRef, useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import { ContextApp } from "../../context/context";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ButtonBase } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";

const certifications = [
  {
    platform: "Alura",
    courses: [
      {
        id: 1,
        name: "Programming Logic with JavaScript",
        description:
          "Certificate of completion for the training course in programming logic using JavaScript, provided by Alura.",
        image:
          "src/assets/certificates/Formación Lógica de programación con JavaScript - Alura.pdf",
      },
      {
        id: 2,
        name: "Explore React with JavaScript",
        description:
          "Certificate of training in the fundamentals of React with JavaScript, covering components, state, and lifecycle.",
        image:
          "src/assets/certificates/Formación Explora React con JavaScript - Alura.pdf",
      },
      {
        id: 3,
        name: "'My Career' Training - Alura",
        description:
          "Certificate of progress within the 'My Career' training offered by Alura, focused on professional development.",
        image: "src/assets/certificates/Formación Mi carrera - Alura.pdf",
      },
      {
        id: 4,
        name: "Git and GitHub Course",
        description:
          "Certificate for the version control course using Git and GitHub, focused on collaborative workflows.",
        image: "src/assets/certificates/Git y GitHub.pdf",
      },
      {
        id: 5,
        name: "React Router - SPA Course",
        description:
          "Certificate for the course on navigation in single-page applications (SPA) using React Router, provided by Alura.",
        image:
          "src/assets/certificates/Curso React Router_ Navegación en una SPA - Alura.pdf",
      },
      {
        id: 6,
        name: "Alura Program Completed",
        description:
          "Official certificate of completion for the full study program on the Alura platform.",
        image:
          "src/assets/certificates/Miguel Antonio Casado Perez - Programa Alura finalizado.pdf",
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
        image:
          "src/assets/certificates/React Completo Hooks Context - Udemy.pdf",
      },
      {
        id: 9,
        name: "Node.js and Express from Scratch - Udemy",
        description:
          "Certificate for the practical course on Node.js and Express to build REST APIs.",
        image: "src/assets/certificates/Node Express desde Cero - Udemy.pdf",
      },
    ],
  },
];

export const CertificationsView = () => {
  const [platformIndex, setPlatformIndex] = useState(0);
  const { handleCertificateOnModal } = useContext(ContextApp);
  const { handleCertificateActive, handleCertifications, certificateActive } =
    usePortfolio();

  useEffect(() => {
    handleCertifications(certifications);
  }, []);

  const handlePrevPlatform = () => {
    setPlatformIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
    handleCertificateActive({
      platform: currentGroup.platform,
      course: currentGroup.courses[0].name,
    });
  };

  const handleNextPlatform = () => {
    setPlatformIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
    handleCertificateActive({
      platform: currentGroup.platform,
      course: currentGroup.courses[0].name,
    });
  };
  const currentGroup = certifications[platformIndex];

  return (
    <article
      className="certifications-section flex w-full justify-center items-center relative"
      id="certifications"
    >
      <div
        key={platformIndex}
        className="certificates-content flex-col justify-between"
      >
        {/* Header con plataforma */}
        <motion.div
          className="certification-header"
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ButtonBase
            onClick={handlePrevPlatform}
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              "&:hover": {
                color: "var(--color-primary)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <ArrowBackIosIcon />
          </ButtonBase>

          <h2 className="certification-header-title">
            {currentGroup.platform}
          </h2>

          <ButtonBase
            onClick={handleNextPlatform}
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              "&:hover": {
                color: "var(--color-primary)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </ButtonBase>
        </motion.div>

        {/* Lista de cursos */}
        <div className="certification-list-container flex justify-between items-center w-full">
          <ul className="certificates-list">
            {currentGroup.courses.map((certification) => (
              <motion.li
                key={certification.id}
                className="certificates-list-item"
                viewport={{ once: true }}
                initial={{
                  opacity: 0,
                  transform: "translateX(-100px)",
                }}
                whileInView={{ opacity: 1, transform: "translateX(0)" }}
                transition={{ duration: 1, delay: 0.5 }}
                onMouseEnter={() => handleCertificateActive(certification)}
                onClick={() => handleCertificateOnModal(certification)}
              >
                <span
                  className={`certificates-list-item-link ${
                    certificateActive?.id === certification.id
                      ? "certificates-list-item-link-active"
                      : ""
                  }`}
                >
                  {certification.name}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Vista previa del certificado */}
          {!certificateActive.image ? (
            <div className="certificate-no-image-container flex items-center justify-center">
              <p className="text-gray-500 text-2xl">No certificate selected</p>
            </div>
          ) : (
            <div className="certificate-image-container flex flex-col items-center justify-center">
              <div className="certification-image" key={certificateActive.id}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Viewer fileUrl={certificateActive.image} />
                </Worker>
              </div>

              <div className="certification-description">
                <p>{certificateActive.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Modal para ver el certificado en grande */}
    </article>
  );
};

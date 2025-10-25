import { useEffect, useState } from "react";
import { ContactMeBlock } from "../layout/components/ContactMeBlock";
import { motion } from "framer-motion";

const acronyms = [
  {
    name: [
      {
        letter: "P",
        word: "roblem-solver",
        description: "Encuentras soluciones rápidas y efectivas en código.",
      },
      {
        letter: "A",
        word: "daptable",
        description:
          "Te ajustas a nuevas tecnologías y frameworks (React, Vue, etc.).",
      },
      {
        letter: "S",
        word: "emantic",
        description: "Escribes HTML limpio y accesible.",
      },
      {
        letter: "S",
        word: "tyling expert",
        description: "Dominas CSS, responsive design y animaciones.",
      },
      {
        letter: "I",
        word: "nteractive",
        description:
          "Creas interfaces dinámicas y amigables con JavaScript/React.",
      },
      {
        letter: "O",
        word: "ptimized",
        description:
          "Te enfocas en rendimiento (carga rápida, buenas prácticas).",
      },
      {
        letter: "N",
        word: "eat code",
        description: "Tu código es claro, ordenado y mantenible.",
      },
      {
        letter: "A",
        word: "ccessible",
        description:
          "Piensas en usabilidad para todos (incluso con discapacidades).",
      },
      {
        letter: "T",
        word: "eam player",
        description: "Trabajas bien en equipo usando Git, Scrum, etc.",
      },
      {
        letter: "E",
        word: "volving",
        description:
          "Siempre aprendes nuevas herramientas y mejoras tus skills.",
      },
    ],
  },
  {
    name: [
      {
        letter: "S",
        word: "calable",
        description: "Creas soluciones que crecen con el proyecto.",
      },
      {
        letter: "K",
        word: "nowledgeable",
        description: "Dominas tecnologías modernas y relevantes.",
      },
      {
        letter: "I",
        word: "ntegrated",
        description: "Conectas APIs y servicios eficientemente.",
      },
      {
        letter: "L",
        word: "ogical",
        description: "Resuelves problemas con pensamiento estructurado.",
      },
      {
        letter: "L",
        word: "earning",
        description: "Siempre en aprendizaje constante.",
      },
      {
        letter: "S",
        word: "haring",
        description: "Compartes conocimiento con tu equipo y comunidad.",
      },
    ],
  },

  {
    name: [
      {
        letter: "W",
        word: "eb",
        description: "Construyes interfaces modernas y atractivas.",
      },
      {
        letter: "O",
        word: "riented",
        description: "Enfocado en la experiencia del usuario (UX/UI).",
      },
      {
        letter: "R",
        word: "esponsive",
        description: "Diseños que funcionan en cualquier dispositivo.",
      },
      {
        letter: "K",
        word: "nowledge",
        description: "Aplicando buenas prácticas y aprendizaje continuo.",
      },
    ],
  },

  {
    name: [
      {
        letter: "E",
        word: "xpertise",
        description: "Dominio en desarrollo web y buenas prácticas.",
      },
      {
        letter: "X",
        word: "tra-mile",
        description: "Siempre vas más allá para entregar calidad.",
      },
      {
        letter: "P",
        word: "rojects",
        description: "Experiencia práctica creando aplicaciones reales.",
      },
      {
        letter: "E",
        word: "ngagement",
        description: "Compromiso con el producto y el usuario.",
      },
      {
        letter: "R",
        word: "esults",
        description: "Te enfocas en lograr objetivos medibles.",
      },
      {
        letter: "I",
        word: "nnovation",
        description: "Aportas ideas creativas para mejorar interfaces.",
      },
      {
        letter: "E",
        word: "volution",
        description: "Crecimiento constante en tecnologías y habilidades.",
      },
      {
        letter: "N",
        word: "etworking",
        description: "Colaboras y aprendes en comunidad de developers.",
      },
      {
        letter: "C",
        word: "oding",
        description: "Construyes soluciones limpias, claras y escalables.",
      },
      {
        letter: "E",
        word: "xcellence",
        description: "Buscas la mejor versión de cada entrega.",
      },
    ],
  },
];

export const SideBarRightHome = () => {
  const [acronymPosition, setAcronymPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAcronymPosition(
        acronymPosition === acronyms.length - 1 ? 0 : acronymPosition + 1
      );
    }, 5000);
  }, [acronymPosition]);

  return (
    <motion.aside
      className="side-bar-right-home-container"
      initial={{ opacity: 0, transform: "translateX(100%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(100%)" }}
      transition={{ duration: 3, ease: "easeInOut" }}
    >
      <div className="side-bar-right-home-content">
        <div className="acronym-container">
          {acronyms[acronymPosition].name.map((item, idx) => (
            <div key={idx} className="acronym-item">
              <span className="acronym-letter mr-2">{item.letter}</span>

              <p className="acronym-word font-bold">{item.word}</p>
            </div>
          ))}
        </div>

        <ContactMeBlock />
      </div>
    </motion.aside>
  );
};

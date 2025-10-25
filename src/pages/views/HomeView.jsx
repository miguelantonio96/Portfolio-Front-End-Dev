import { useEffect, useState } from "react";
import { LoadingIcon } from "../../ui/components/LoadingIcon";
import { BannerNameHome } from "../../components";
import { motion } from "framer-motion";
import { usePortfolio } from "../../hooks/usePortfolio";


export const HomeView = () => {
  const { initialAppState } = usePortfolio();

  const [skillsList, setSkillsList] = useState(initialAppState || []);
  const [selectedSkill, setSelectedSkill] = useState(
    JSON.parse(localStorage.getItem("selectedSkill")) || {}
  );

  useEffect(() => {
    const storedSelectedSkill = localStorage.getItem("selectedSkill");
    if (storedSelectedSkill) {
      setSelectedSkill(JSON.parse(storedSelectedSkill));
    }
    setSkillsList(initialAppState);
  }, [initialAppState]);

  const handleOpenModal = (skill) => {
    setSelectedSkill({
      ...selectedSkill,
      name: skill.name,
      icon: skill.icon,
      intro: skill.intro,
      description: skill.description,
      isModalOpen: true,
    });

    if (skill.name) {
      document.documentElement.setAttribute(
        "data-theme",
        skill.name.toLowerCase()
      );
    }
    localStorage.setItem("selectedSkill", JSON.stringify(skill));
  };

  useEffect(() => {
    if (selectedSkill.name) {
      document.documentElement.setAttribute(
        "data-theme",
        selectedSkill.name.toLowerCase()
      );
    }
  }, [selectedSkill]);

  return (
    <article className="home-view-container" id="home">
      <BannerNameHome />

      <motion.section
        className="me-photo-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
      >
        <div className="me-photo-wrapper">
          <img src="public/me-photo-holding-2.png" alt=" me" className="me-photo" />
        </div>
      </motion.section>
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, transform: "scale(0.7)" }}
        animate={{ opacity: 1, transform: "scale(1)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
      >
        <div className="skills-content">
          <div className="skills-items-list">
            {skillsList.length === 0 ? (
              <LoadingIcon />
            ) : (
              skillsList.map((skill, index) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <div
                    className={`
            skills-item
            ${isSelected ? "skills-item-hover" : ""}
            ${isSelected ? "skills-item-hover-show" : ""}
          `}
                    key={index}
                  >
                    {isSelected ? (
                      <h2 className="skill-name">{skill.name}</h2>
                    ) : (
                      <img
                        onClick={() => handleOpenModal(skill)}
                        src={skill.icon}
                        alt={skill.name}
                        className="h-25"
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Modal */}
        <motion.div
          className="skill-modal-container"
          key={selectedSkill.name}
          initial={{ opacity: 0, transform: "translateY(-100px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          exit={{ opacity: 0, transform: "translateY(-100px)" }}
        >
          {selectedSkill.name && (
            <motion.div
              className="skill-modal"
              key={selectedSkill.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>{selectedSkill.description}</p>
            </motion.div>
          )}
        </motion.div>
      </motion.section>
    </article>
  );
};

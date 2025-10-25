import { motion } from "framer-motion";
export const BannerNameHome = () => {
  return (
    <section className="banner-name-container">
      <motion.div
        className="banner-name-background"
        viewport={{ once: true, amount: 0.9 }}
        initial={{
          opacity: 1,
          background:
            "linear-gradient(135deg, transparent 0%, var(--color-secondary) 0%)",
        }}
        animate={{
          opacity: 1,
          background:
            "linear-gradient(135deg, transparent 100%, var(--color-secondary) 100%)",
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.8 }}
      ></motion.div>
      <div>
        <span className="name-text-content first-name-text">Miguel</span>
        <span className="name-text-content second-name-text">Casado</span>
      </div>

      <div>
        <span className="name-text-content second-name-text ">Front-</span>
        <span className="name-text-content first-name-text">End Dev</span>
      </div>
    </section>
  );
};

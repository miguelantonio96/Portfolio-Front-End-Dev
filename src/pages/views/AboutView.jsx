import { motion } from "framer-motion";

export const AboutView = () => {
  // useEffect(() => {
  //   const getCurrentSectionId = () => {
  //     const sectionAboutMe = document.getElementById("about");
  //     const aboutBlogContainer = document.getElementById("about-me");
  //     const rect = sectionAboutMe.getBoundingClientRect();

  //     if (
  //       rect.top <= window.innerHeight / 2 &&
  //       rect.bottom >= window.innerHeight / 2
  //     ) {
  //       aboutBlogContainer.classList.add("about-content-show");
  //     } else {
  //       aboutBlogContainer.classList.remove("about-content-show");
  //     }
  //   };

  //   window.addEventListener("scroll", getCurrentSectionId);
  //   return () => window.removeEventListener("scroll", getCurrentSectionId);
  // }, []);

  return (
    <article className="about-container" id="about">
      <motion.div
        className="about-blog-container"
        viewport={{ once: false }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <h2 className="about-title">About Me</h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-text">
            <p>
              Hi! I&apos;m Miguel, a web developer passionate about creating
              attractive and functional digital experiences. I specialize in
              React, JavaScript, and modern design.
            </p>
            <br />
            <blockquote className="about-quote">
              “My vision is to create digital experiences that merge creativity
              and functionality, making technology more intuitive, accessible,
              and inspiring for everyone.”
            </blockquote>
           
            <p>
              I enjoy solving complex problems and continuously learning new
              technologies to improve my skills. My goal is to build
              user-friendly interfaces that make a positive impact. When
              I&apos;m not coding, I like exploring new design trends and
              collaborating with other developers on exciting projects.
            </p>
          </div>
          <div className="about-image">
            <motion.img
              src="/portfolio-me-photo-Recovered.png"
              alt="about me image"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
};

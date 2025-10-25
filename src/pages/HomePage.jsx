import { Navbar } from "../components";
import { usePortfolio } from "../hooks/usePortfolio";
import {
  AboutView,
  CertificationsView,
  ExperienceView,
  HomeView,
  ProjectsView,
} from "./views";

export const HomePage = () => {
  const { handleCurrentArticleTitle } = usePortfolio();
  const getCurrentSectionId = () => {
    const sections = document.querySelectorAll("article");
    let currentSectionId = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSectionId = section.id;
      }
    });

    return currentSectionId;
  };

  window.addEventListener("load", () => {
    const header = document.querySelectorAll(".nav-bar-item");
    const currentSectionId = getCurrentSectionId();
    if (currentSectionId) {
      handleCurrentArticleTitle(
        currentSectionId.charAt(0).toUpperCase() + currentSectionId.slice(1)
      );
    }

    header.forEach((item) => item.classList.remove("nav-bar-item-bg-color"));
  });

  let lastSectionId = null;

  window.addEventListener("scroll", () => {
    const currentSectionId = getCurrentSectionId();
    const scrollY = window.scrollY;
    const header = document.querySelectorAll(".nav-bar-item");

    if (currentSectionId !== lastSectionId) {
      handleCurrentArticleTitle(
        currentSectionId.charAt(0).toUpperCase() + currentSectionId.slice(1)
      );
      lastSectionId = currentSectionId;
    }

    if (scrollY > 0) {
      header.forEach((item) => item.classList.add("nav-bar-item-bg-color"));
    } else {
      header.forEach((item) => item.classList.remove("nav-bar-item-bg-color"));
    }
  });

  return (
    <>
      <Navbar />
      <main className="home-page w-full" id="home-main">
        <>
          <HomeView />
        </>
        <>
          <AboutView />
        </>
        <>
          <CertificationsView />
        </>
        <>
          <ExperienceView />
        </>
        <>
          <ProjectsView />
        </>
      </main>
    </>
  );
};

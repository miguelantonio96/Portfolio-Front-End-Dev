import { Route, Routes } from "react-router";
import { HomePage, NotFoundPage, ProjectsPage } from "../pages";
import { AppLayout } from "../layout/AppLayout";
import { useEffect } from "react";

export const AppRouter = () => {

  // Scroll to the top of the page when the HomePage component is mounted
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

  return (
    <Routes>
      {/* Rutas */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
       
      </Route>
      {/* Rutas Not Found*/}
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};

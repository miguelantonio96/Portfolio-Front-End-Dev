import { Route, Routes } from "react-router";
import { HomePage, NotFoundPage } from "../pages";
import { AppLayout } from "../layout/AppLayout";
import { useEffect } from "react";

export const AppRouter = () => {
   useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

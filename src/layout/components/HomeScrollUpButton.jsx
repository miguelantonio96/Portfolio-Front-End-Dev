import { ArrowUpward } from "@mui/icons-material";

export const HomeScrollUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-scroll-up-button" onClick={() => scrollToTop()}>
      <span><ArrowUpward /></span>
    </div>
  );
};

import { Box, ButtonBase, Card, CardContent, CardHeader } from "@mui/material";
import { useState } from "react";

export const AppCard = ({ title, description, demo, github, image }) => {
  const [overlayProjectButtons, setOverlayProjectButtons] = useState(false);

  const handleDemoProject = (demo) => {
    if (!demo) {
      console.error("Demo link is not provided for this project.");
      return;
    }
    window.open(demo, "_blank");
  };

  const handleGithubProject = (github) => {
    if (!github) {
      console.error("GitHub link is not provided for this project.");
      return;
    }
    window.open(github, "_blank");
  };

  const handleOverlayBtnProjectCard = () => {
    setOverlayProjectButtons((prev) => !prev);
  };

  return (
    <Card
      className="project-card-container  gap-2.5"
      onMouseEnter={() => handleOverlayBtnProjectCard()}
      onMouseLeave={() => handleOverlayBtnProjectCard()}
      sx={{
        position: "relative",
        width: "calc(100% / 4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        flexShrink: 0,
        paddingBlock: "10px",
        color: "white",
        backgroundColor: "transparent",
        borderBlock: "2px solid #022631",
        borderRadius: "10px",
        fontSize: "1.2rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#0e0e10",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <CardHeader title={title} sx={{ textAlign: "center", zIndex: 1 }} />

      <Box
        className="buttons-overlay-project-card"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "black",
          opacity: 0.8,
          gap: "10px",
          width: "100%",
          height: "100%",
          display: overlayProjectButtons ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <ButtonBase
          onClick={() => handleDemoProject(demo)}
          className="hover:scale-105 transition-all duration-300 ease-in-out"
          sx={{
            backgroundColor: "#087ea4",
            padding: "10px 20px",
            fontSize: "1.2rem",
            color: "#ffffff",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "15px",
          }}
        >
          Demo
        </ButtonBase>
        <ButtonBase
          onClick={() => handleGithubProject(github)}
          className="hover:scale-105 transition-all duration-300 ease-in-out"
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            fontWeight: "bold",
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
            borderRadius: "15px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          GitHub
        </ButtonBase>
      </Box>

      <div className="video-image-container w-full flex justify-center items-center">
        <img src={image} alt="Project 1" className="w-full  object-cover" />
     
      </div>

      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

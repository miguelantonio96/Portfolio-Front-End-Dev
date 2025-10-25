import { Box } from "@mui/material";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";

export const SliderHome = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
          
        },
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 1,
        font: "bold 26px Montserrat, sans-serif",
        color: "white",
        
      }}
    >
      <nav
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <NavLink
          className="previous-item"
          style={{ color: "#b2b2b2b5", fontSize: "20px"  }}
          relative="/"
          replace
          to={{
            pathname: "/",
            search: "",
            hash: "#skills",
          }}
        >
          Home
        </NavLink>

        <NavLink
          className="next-item"
          style={{ color: "#d99653", fontSize: "25px" }}
          relative="/"
          replace
          to={{
            pathname: "/",
            search: "",
            hash: "#skills",
          }}
        >
          Skills
        </NavLink>

        <NavLink
          className="after-item"
          style={{ color: "#b2b2b2b5", fontSize: "20px"  }}
          relative="/"
          replace
          to={{
            pathname: "/",
            search: "",
            hash: "#skills",
          }}
        >
          Certifications
        </NavLink>
      </nav>
    </Box>
  );
};

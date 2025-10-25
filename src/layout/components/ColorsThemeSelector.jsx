import { useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

export const ColorsThemeSelector = () => {
  const { initialAppState } = usePortfolio();
  const [isColoring, setIsColoring] = useState(false);

  const handleThemeColoring = (item) => {
    document.documentElement.setAttribute(
      "data-theme",
      item.name.toLowerCase()
    );
    localStorage.setItem("selectedSkill", JSON.stringify(item));
  };

  const handleToggleColoring = () => {
    setIsColoring(!isColoring);
  };
  return (
    <div className="colors-theme-selector-container">
      {isColoring && (
        <div
          className="colors-theme-selector-close-button"
          onClick={() => handleToggleColoring()}
        >X</div>
      )}
      {isColoring ? (
        initialAppState?.map((item, idx) => (
          <div
            key={idx}
            className="colors-theme-selector-button"
            style={{ backgroundColor: item.color }}
            onClick={() => handleThemeColoring(item)}
          ></div>
        ))
      ) : (
        <div
          className="colors-theme-selector-toggle-button"
          onClick={() => handleToggleColoring()}
        ></div>
      )}
    </div>
  );
};

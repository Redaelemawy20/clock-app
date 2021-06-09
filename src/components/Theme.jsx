import React from "react";
const Theme = ({ theme, onChangeTheme }) => {
  let classes = theme === "light" ? "dark" : "light";
  return (
    <>
      <button className={`btn-theme btn-${classes}`} onClick={onChangeTheme}>
        {classes} mode
      </button>
    </>
  );
};

export default Theme;

import React from "react";
const Hand = ({ degree, type, theme }) => {
  let classes = theme === "light" ? "dark" : "light";

  return (
    <div
      className={`hand hand-${type} hand-${classes}`}
      style={{
        transform: `rotate(${degree}deg)`,
      }}
    ></div>
  );
};

export default Hand;

import React from "react";
const Hand = ({ degree, type }) => {
  return (
    <div
      className={`hand ${type}`}
      style={{
        transform: `rotate(${degree}deg)`,
      }}
    ></div>
  );
};

export default Hand;

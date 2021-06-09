import React from "react";
const Hours = () => {
  let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {hours.map((hour) => (
        <div className={`number number${hour}`}>{hour}</div>
      ))}
    </>
  );
};

export default Hours;

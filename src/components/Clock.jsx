import React, { useRef, useState, useEffect } from "react";
import Hand from "./Hand";
import Hours from "./Hours";
import getRotaionDegress from "../utils/degress";
const Clock = () => {
  //   const [hour, setHour] = useState(new Date().getHours());
  //   const [minute, setMinute] = useState(new Date().getMinutes());
  //   const [second, setSecond] = useState(new Date().getSeconds());
  const [running, setRunning] = useState(true);
  const [degrees, setDegress] = useState(
    getRotaionDegress(
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds()
    )
  );

  const interval = () => {
    return setInterval(() => {
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      //   setHour(hours);
      //   setMinute(minutes);
      //   setSecond(seconds);
      setDegress(getRotaionDegress(hours, minutes, seconds));
    }, 1000);
  };

  const intervalRef = useRef();
  useEffect(() => {
    if (running) intervalRef.current = interval();
    else clearInterval(intervalRef.current);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  return (
    <>
      <div className="clock">
        <Hand type="hour" degree={degrees.hourRotaion} />
        <Hand type="minute" degree={degrees.minuteRotaion} />
        <Hand type="second" degree={degrees.secondRotaion} />
        <Hours />
      </div>
      {/* <button
        onClick={() => {
          setRunning(!running);
        }}
      >
        Toggle Running
      </button> */}
    </>
  );
};

export default Clock;

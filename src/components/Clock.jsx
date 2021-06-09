import React, { useRef, useState, useEffect } from "react";
import Hand from "./Hand";
import Hours from "./Hours";
import Theme from "./Theme";
import getRotaionDegress from "../utils/degress";
const Clock = () => {
  //   const [hour, setHour] = useState(new Date().getHours());
  //   const [minute, setMinute] = useState(new Date().getMinutes());
  //   const [second, setSecond] = useState(new Date().getSeconds());
  const [theme, setTheme] = useState("light");
  const [running, setRunning] = useState(true);
  const [degrees, setDegress] = useState(
    getRotaionDegress(
      new Date().getHours(),
      new Date().getMinutes(),
      new Date().getSeconds()
    )
  );
  const changeTheme = () => {
    let light = "light";
    let dark = "dark";
    if (theme === light) setTheme(dark);
    else setTheme(light);
  };
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
    <div className={`main main-${theme}`}>
      <Theme onChangeTheme={changeTheme} theme={theme} />
      <div className="clock">
        <Hand type="hour" degree={degrees.hourRotaion} theme={theme} />
        <Hand type="minute" degree={degrees.minuteRotaion} theme={theme} />
        <Hand type="second" degree={degrees.secondRotaion} theme={theme} />
        <Hours />
      </div>
      {/* <button
        onClick={() => {
          setRunning(!running);
        }}
      >
        Toggle Running
      </button> */}
    </div>
  );
};

export default Clock;

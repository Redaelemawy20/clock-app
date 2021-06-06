export default (hours, minutes, seconds) => {
  const secondsRatio = seconds / 60;
  const minutesRatio = (minutes + secondsRatio) / 60;
  const houresRatio = (hours + minutesRatio) / 12;
  return {
    secondRotaion: secondsRatio * 360,
    minuteRotaion: minutesRatio * 360,
    hourRotaion: houresRatio * 360,
  };
};

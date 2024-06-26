import React, { useState } from "react";
import DonghoSimple from "./DonghoSimple";

function DongHobutton() {
  const [time, setTime] = useState(60);
  const [intervalId, setIntervalId] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startClick = () => {
    const id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setIntervalId(id);
    setIsRunning(true);
  };

  const handleClick = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(60);
    clearInterval(intervalId);
    setIsRunning(false);
  };

  return (
    <>
      <DonghoSimple time={time} />
      {isRunning ? (
        <button onClick={handleClick}> Stop</button>
      ) : (
        <button onClick={startClick}> Start</button>
      )}
      <button onClick={handleReset}> Reset</button>
    </>
  );
}

export default DongHobutton;

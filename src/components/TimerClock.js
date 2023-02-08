import React, { useEffect, useState, useRef } from "react";

function TimerClock({ mode, pause, standby }) {
  const [display, setDisplay] = useState(`${mode.duration}:00`);
  const [duration, setDuration] = useState(mode.duration * 60 - 1);
  const [currentMode, setCurrentMode] = useState(mode);
  let countdown;
  countdown = useInterval(
    () => {
      let minutes, seconds;

      setDuration((duration) => duration - 1);

      minutes = parseInt(duration / 60, 10);
      seconds = parseInt(duration % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      setDisplay(`${minutes}:${seconds}`);
      document.title = `${minutes}:${seconds}`;

      if (standby) {
        setDuration(mode.duration * 60 - 1);
        setDisplay(`${mode.duration}:00`);
      } else {
        if (duration < 0) {
          clearInterval(countdown);
        }
      }
    },
    !pause && duration >= 0 ? 1000 : null,
    mode,
    duration,
    standby,
    currentMode
  );

  function useInterval(callback, delay, mode, duration) {
    const savedCallback = useRef();
    let id;

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      console.log(mode.name);

      if (currentMode.code !== mode.code || standby) {
        setDisplay(`${mode.duration}:00`);
        setDuration(mode.duration * 60 - 1);
        setCurrentMode(mode);
      }

      function tick() {
        savedCallback.current();
      }
      if (delay !== null && !standby) {
        id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay, mode, duration, standby, currentMode]);
  }

  return <header size={900}> {display}</header>;
}

export default TimerClock;

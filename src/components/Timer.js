import React, { useState, useEffect } from "react";
import TimerClock from "./TimerClock";
import "./Timer.css";

const Timer = (props) => {
  const modes = Object.freeze({
    pomodoro: {
      name: "Pomodoro",
      code: "pomodoro",
      duration: 25,
    },
    shortBreak: {
      name: "Short Break",
      code: "shortBreak",
      duration: 5,
    },
    longBreak: {
      name: "Long Break",
      code: "longBreak",
      duration: 15,
    },
  });
  // seconds
  const [date, setDate] = useState(new Date());

  const [fixedDate, setFixedDate] = useState(date);
  const [mode, setMode] = useState(modes.pomodoro);
  const [pause, setPause] = useState(false);
  const [standby, setStandby] = useState(true);

  const [goFull, setGoFull] = useState(false);

  useEffect(() => {
    console.log("full clicked");
    const e = document.getElementById(props.Background);
    e?.requestFullscreen();
  }, [goFull]);

  const controls = {
    options: [
      { label: "Pomodoro", value: "pomodoro" },
      { label: "Short Break", value: "shortBreak" },
      { label: "Long Break", value: "longBreak" },
    ],
    value: "pomodoro",
  };

  useEffect(() => {
    const tick = () => {
      setDate(new Date());
      if (pause && date.getSeconds() === 59) {
        setFixedDate(
          new Date(
            fixedDate.setMilliseconds(fixedDate.getMilliseconds() + 1000 * 60)
          )
        );
      }
    };
    const secondsTimer = setInterval(() => tick(), 1000);
    return () => {
      if (secondsTimer) clearInterval(secondsTimer);
    };
  }, [mode, pause, date, fixedDate]);

  return (
    <div className="entire-timer-with-buttons">
      <button
        className="pomo-timer-button"
        name="switch"
        options={controls.options}
        value={mode.code}
        onChange={(value) => setMode(modes[value])}
        onClick={() => {
          setMode(modes.pomodoro);
          console.log("pomodoro button clicked");
        }}
      >
        Pomodoro
      </button>
      <button
        className="short-break-button"
        name="switch"
        options={controls.options}
        value={mode.code}
        onChange={(value) => setMode(modes[value])}
        onClick={() => {
          setMode(modes.shortBreak);
          console.log("short break button clicked");
        }}
      >
        Short Break
      </button>
      <button
        className="long-break-button"
        name="switch"
        options={controls.options}
        value={mode.code}
        onChange={(value) => setMode(modes[value])}
        onClick={() => {
          setMode(modes.longBreak);
          console.log("long break button clicked");
        }}
      >
        Long Break
      </button>

      <div className="timer" id={props.Background}>
        <div
          onClick={(e) => {
            setGoFull(!goFull);
          }}
        >
          <TimerClock standby={standby} mode={mode} pause={pause} />
        </div>
      </div>
      <button
        className="start-button"
        height={40}
        appearance="primary"
        onClick={() => {
          if (pause) {
            setPause(false);
          } else {
            setStandby(false);
            setFixedDate(date);
          }
        }}
      >
        Start
      </button>

      <button
        className="pause-button"
        height={40}
        appearance="primary"
        onClick={() => {
          setPause(true);
        }}
      >
        Pause
      </button>

      <button
        className="reset-button"
        height={40}
        appearance="primary"
        onClick={() => {
          setStandby(true);
          setPause(false);
          setMode(modes.pomodoro);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;

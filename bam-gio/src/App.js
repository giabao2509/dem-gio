import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0); // Thời gian tính bằng giây
  const [isRunning, setIsRunning] = useState(false); // Trạng thái đang chạy

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="container">
      <h1 className="title">⏱ Bấm Giờ </h1>
      <p className="timer">{formatTime(time)}</p>
      <div className="button-group">
        <button
          className="button start"
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Bắt đầu
        </button>
        <button
          className="button stop"
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          Dừng
        </button>
        <button
          className="button reset"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default App;

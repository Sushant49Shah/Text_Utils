import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let interval = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      alert('Time is up!');
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className='position-absolute bottom-0 end-0 border border-danger-subtle w-25'>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default Timer;

import "./LiveClock.css";

import { useEffect, useState } from "react";

import { FaClock } from "react-icons/fa";

function LiveClock() {

  const [time, setTime] = useState(
    new Date()
  );

  useEffect(() => {

    const interval = setInterval(() => {

      setTime(new Date());

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="clock-card">

      <FaClock className="clock-icon" />

      <div>

        <h2>Live System Time</h2>

        <p>
          {time.toLocaleTimeString()}
        </p>

      </div>

    </div>
  );
}

export default LiveClock;
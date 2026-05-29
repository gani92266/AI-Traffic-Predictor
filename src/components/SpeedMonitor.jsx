import "./SpeedMonitor.css";

import {

  useEffect,
  useState,

} from "react";

import {

  FaTachometerAlt,
  FaCar,

} from "react-icons/fa";

function SpeedMonitor() {

  const [speed, setSpeed] =
    useState(0);

  const [status, setStatus] =
    useState("Stopped");

  /* TRACK SPEED */

  useEffect(() => {

    const watchId =

      navigator.geolocation.watchPosition(

        (position) => {

          const liveSpeed =

            position.coords.speed;

          if (liveSpeed) {

            const kmh =

              (
                liveSpeed * 3.6
              ).toFixed(1);

            setSpeed(kmh);

            if (kmh > 0) {

              setStatus("Moving");

            }

            else {

              setStatus("Stopped");

            }

          }

        },

        (error) => {

          console.log(error);

        },

        {

          enableHighAccuracy: true,

        }

      );

    return () =>

      navigator.geolocation.clearWatch(
        watchId
      );

  }, []);

  return (

    <div className="speed-card">

      {/* HEADER */}

      <div className="speed-header">

        <FaTachometerAlt />

        <h2>
          Live Speed Monitor
        </h2>

      </div>

      {/* SPEED */}

      <div className="speed-display">

        <FaCar className="car-icon" />

        <h1>
          {speed} km/h
        </h1>

      </div>

      {/* STATUS */}

      <div className="speed-status">

        {status}

      </div>

    </div>

  );

}

export default SpeedMonitor;
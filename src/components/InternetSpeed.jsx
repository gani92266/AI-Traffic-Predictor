import "./InternetSpeed.css";

import {

  useEffect,
  useState,

} from "react";

import {

  FaWifi,

} from "react-icons/fa";

function InternetSpeed() {

  const [speed, setSpeed] =
    useState("Checking...");

  const [status, setStatus] =
    useState("Testing");

  /* CHECK SPEED */

  useEffect(() => {

    const connection =

      navigator.connection ||

      navigator.mozConnection ||

      navigator.webkitConnection;

    if (connection) {

      const downlink =

        connection.downlink;

      setSpeed(
        `${downlink} Mbps`
      );

      if (downlink > 10) {

        setStatus("Excellent");

      }

      else if (downlink > 5) {

        setStatus("Good");

      }

      else {

        setStatus("Slow");

      }

    }

    else {

      setSpeed(
        "Not Supported"
      );

      setStatus("Unknown");

    }

  }, []);

  return (

    <div className="internet-card">

      {/* HEADER */}

      <div className="internet-header">

        <FaWifi />

        <h2>
          Network Speed
        </h2>

      </div>

      {/* SPEED */}

      <h1>
        {speed}
      </h1>

      {/* STATUS */}

      <div className="internet-status">

        {status}

      </div>

    </div>

  );

}

export default InternetSpeed;
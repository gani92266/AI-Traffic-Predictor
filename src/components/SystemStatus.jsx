import "./SystemStatus.css";

import {
  FaWifi,
  FaSatelliteDish,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";

import { useEffect, useState } from "react";

function SystemStatus() {

  /* NETWORK */

  const [online, setOnline] =
    useState(navigator.onLine);

  /* GPS */

  const [gps, setGps] =
    useState("Checking...");

  useEffect(() => {

    /* ONLINE/OFFLINE */

    const handleOnline = () =>
      setOnline(true);

    const handleOffline = () =>
      setOnline(false);

    window.addEventListener(
      "online",
      handleOnline
    );

    window.addEventListener(
      "offline",
      handleOffline
    );

    /* GPS */

    navigator.geolocation.getCurrentPosition(

      () => {
        setGps("Strong");
      },

      () => {
        setGps("Unavailable");
      }

    );

    return () => {

      window.removeEventListener(
        "online",
        handleOnline
      );

      window.removeEventListener(
        "offline",
        handleOffline
      );

    };

  }, []);

  return (

    <div className="status-grid">

      {/* NETWORK */}

      <div className="status-card">

        <FaWifi className="status-icon" />

        <div>

          <h3>Network</h3>

          <p>

            {online
              ? "Connected"
              : "Offline"}

          </p>

        </div>

      </div>

      {/* GPS */}

      <div className="status-card">

        <FaSatelliteDish className="status-icon" />

        <div>

          <h3>GPS Signal</h3>

          <p>{gps}</p>

        </div>

      </div>

      {/* SECURITY */}

      <div className="status-card">

        <FaShieldAlt className="status-icon" />

        <div>

          <h3>Security</h3>

          <p>Protected</p>

        </div>

      </div>

      {/* AI ENGINE */}

      <div className="status-card">

        <FaDatabase className="status-icon" />

        <div>

          <h3>AI Engine</h3>

          <p>Running</p>

        </div>

      </div>

    </div>

  );

}

export default SystemStatus;
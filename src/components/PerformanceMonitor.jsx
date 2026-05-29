import "./PerformanceMonitor.css";

import {

  FaMicrochip,
  FaWifi,
  FaSatellite,
  FaBrain,

} from "react-icons/fa";

function PerformanceMonitor() {

  /* RANDOM VALUES */

  const cpu =
    Math.floor(
      Math.random() * 30 + 60
    );

  const network =
    Math.floor(
      Math.random() * 20 + 80
    );

  const gps =
    Math.floor(
      Math.random() * 10 + 90
    );

  const ai =
    Math.floor(
      Math.random() * 5 + 95
    );

  return (

    <div className="performance-card">

      <h2>
        📊 AI Performance Monitor
      </h2>

      {/* CPU */}

      <div className="performance-item">

        <FaMicrochip />

        <p>
          CPU Efficiency
        </p>

        <span>
          {cpu}%
        </span>

      </div>

      {/* NETWORK */}

      <div className="performance-item">

        <FaWifi />

        <p>
          Network Stability
        </p>

        <span>
          {network}%
        </span>

      </div>

      {/* GPS */}

      <div className="performance-item">

        <FaSatellite />

        <p>
          GPS Accuracy
        </p>

        <span>
          {gps}%
        </span>

      </div>

      {/* AI */}

      <div className="performance-item">

        <FaBrain />

        <p>
          AI Prediction Accuracy
        </p>

        <span>
          {ai}%
        </span>

      </div>

    </div>

  );

}

export default PerformanceMonitor;
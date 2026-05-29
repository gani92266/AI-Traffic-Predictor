import "./EmergencyAlerts.css";

import {

  FaExclamationTriangle,
  FaCarCrash,
  FaCloudRain,
  FaTrafficLight,

} from "react-icons/fa";

function EmergencyAlerts({

  weather,
  realStats,

}) {

  /* ETA */

  const eta =
    parseInt(realStats.eta);

  return (

    <div className="alerts-card">

      <h2>
        🚨 Emergency Alerts
      </h2>

      {/* WEATHER */}

      {weather?.condition === "Rain" && (

        <div className="alert-item danger">

          <FaCloudRain />

          <p>
            Heavy rain detected.
            Drive carefully.
          </p>

        </div>

      )}

      {/* TRAFFIC */}

      {eta > 40 && (

        <div className="alert-item warning">

          <FaTrafficLight />

          <p>
            Severe traffic congestion
            detected ahead.
          </p>

        </div>

      )}

      {/* ACCIDENT */}

      {eta > 60 && (

        <div className="alert-item accident">

          <FaCarCrash />

          <p>
            Possible road blockage or
            accident risk detected.
          </p>

        </div>

      )}

      {/* SAFE */}

      {eta <= 40 &&
        weather?.condition !==
          "Rain" && (

        <div className="alert-item safe">

          <FaExclamationTriangle />

          <p>
            Route conditions are stable
            and safe.
          </p>

        </div>

      )}

    </div>

  );

}

export default EmergencyAlerts;
import "./Notifications.css";

import {
  FaBell,
  FaExclamationTriangle,
  FaCheckCircle,
  FaCloudRain,
  FaRoad,
} from "react-icons/fa";

function Notifications({

  realStats,
  weather,

}) {

  const etaValue =
    parseInt(realStats?.eta);

  const distanceValue =
    parseInt(realStats?.distance);

  return (

    <div className="notifications">

      <div className="notifications-header">

        <FaBell className="bell-icon" />

        <h2>Live Notifications</h2>

      </div>

      {/* LONG ETA */}

      {etaValue > 120 && (

        <div className="notification warning">

          <FaExclamationTriangle />

          <p>

            Heavy traffic detected.
            ETA exceeds 2 hours.

          </p>

        </div>

      )}

      {/* WEATHER */}

      {weather?.condition === "Rain" && (

        <div className="notification rain">

          <FaCloudRain />

          <p>

            Rain detected on route.
            Drive carefully.

          </p>

        </div>

      )}

      {/* LONG DISTANCE */}

      {distanceValue > 100 && (

        <div className="notification info">

          <FaRoad />

          <p>

            Long-distance route detected.

          </p>

        </div>

      )}

      {/* SUCCESS */}

      {realStats?.distance !== "--" && (

        <div className="notification success">

          <FaCheckCircle />

          <p>

            Smart route generated successfully.

          </p>

        </div>

      )}

      {/* DEFAULT */}

      {realStats?.distance === "--" && (

        <div className="notification neutral">

          <p>

            Generate a route to receive AI alerts.

          </p>

        </div>

      )}

    </div>

  );

}

export default Notifications;
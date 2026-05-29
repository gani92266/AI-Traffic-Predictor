import "./Analytics.css";

import {

  FaClock,
  FaRoad,
  FaCloudSun,
  FaTrafficLight,

} from "react-icons/fa";

function Analytics({

  realStats,
  weather,

}) {

  /* AI TRAFFIC SCORE */

  const trafficScore =

    realStats.eta !== "--"

      ? Math.min(

          parseInt(realStats.eta) * 2,

          100

        )

      : 0;

  /* SCORE COLOR */

  const getScoreColor = () => {

    if (trafficScore < 30) {

      return "#00ff99";

    }

    if (trafficScore < 60) {

      return "#ffd000";

    }

    return "#ff4444";

  };

  return (

    <div className="analytics-container">

      {/* ETA */}

      <div className="analytics-card">

        <FaClock className="analytics-icon" />

        <h3>ETA</h3>

        <p>
          {realStats.eta}
        </p>

      </div>

      {/* DISTANCE */}

      <div className="analytics-card">

        <FaRoad className="analytics-icon" />

        <h3>Distance</h3>

        <p>
          {realStats.distance}
        </p>

      </div>

      {/* WEATHER */}

      <div className="analytics-card">

        <FaCloudSun className="analytics-icon" />

        <h3>Weather</h3>

        <p>

          {weather

            ? `${weather.temp}°C • ${weather.condition}`

            : "--"}

        </p>

      </div>

      {/* AI TRAFFIC SCORE */}

      <div className="analytics-card">

        <FaTrafficLight
          className="analytics-icon"
        />

        <h3>AI Traffic Score</h3>

        <div className="score-container">

          <div

            className="score-bar"

            style={{

              width:
                `${trafficScore}%`,

              background:
                getScoreColor(),

            }}

          ></div>

        </div>

        <p>

          {trafficScore}
          %

        </p>

      </div>

    </div>

  );

}

export default Analytics;
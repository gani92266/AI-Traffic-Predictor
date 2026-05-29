import "./AIPanel.css";

import {

  FaRobot,
  FaBolt,
  FaRoute,
  FaCloudSun,

} from "react-icons/fa";

function AIPanel({

  realStats,
  weather,

}) {

  /* AI ANALYSIS */

  const getTrafficMessage = () => {

    const eta = parseInt(
      realStats.eta
    );

    if (!eta) {

      return "AI waiting for route data.";

    }

    if (eta < 20) {

      return "Traffic is light. Fast route detected.";

    }

    if (eta < 40) {

      return "Moderate traffic ahead. Route optimized.";

    }

    return "Heavy congestion detected. Consider alternate timing.";

  };

  /* WEATHER MESSAGE */

  const getWeatherMessage = () => {

    if (!weather) {

      return "Weather data unavailable.";

    }

    if (
      weather.condition === "Rain"
    ) {

      return "Rain detected. Roads may be slippery.";

    }

    if (
      weather.condition === "Clouds"
    ) {

      return "Cloudy conditions with stable traffic.";

    }

    if (
      weather.condition === "Clear"
    ) {

      return "Clear weather. Driving conditions are excellent.";

    }

    return `${weather.condition} weather detected.`;

  };

  return (

    <div className="ai-panel">

      {/* HEADER */}

      <div className="ai-header">

        <FaRobot className="ai-icon" />

        <h2>
          AI Route Assistant
        </h2>

      </div>

      {/* TRAFFIC */}

      <div className="ai-message">

        <FaRoute />

        <p>
          {getTrafficMessage()}
        </p>

      </div>

      {/* WEATHER */}

      <div className="ai-message">

        <FaCloudSun />

        <p>
          {getWeatherMessage()}
        </p>

      </div>

      {/* AI PREDICTION */}

      <div className="ai-message">

        <FaBolt />

        <p>

          AI predicts traffic intensity of

          {" "}

          {realStats.eta !== "--"

            ? Math.min(

                parseInt(
                  realStats.eta
                ) * 2,

                95

              )
            : 0}

          %

          {" "}

          for this route.

        </p>

      </div>

    </div>

  );
}

export default AIPanel;
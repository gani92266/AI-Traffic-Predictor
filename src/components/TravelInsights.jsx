import "./TravelInsights.css";

import {

  FaGasPump,
  FaLeaf,
  FaRoad,
  FaBrain,

} from "react-icons/fa";

function TravelInsights({

  realStats,

}) {

  /* DISTANCE */

  const distance =

    parseFloat(
      realStats.distance
    ) || 0;

  /* ESTIMATIONS */

  const fuelEstimate =

    (distance / 18).toFixed(1);

  const carbonEmission =

    (distance * 0.12).toFixed(1);

  /* DIFFICULTY */

  const getDifficulty = () => {

    if (distance < 20) {

      return "Easy";

    }

    if (distance < 80) {

      return "Moderate";

    }

    return "Difficult";

  };

  return (

    <div className="insights-card">

      <h2>
        🌍 Travel Insights
      </h2>

      {/* FUEL */}

      <div className="insight-item">

        <FaGasPump />

        <p>

          Estimated Fuel:
          {" "}

          {fuelEstimate}
          {" "}
          L

        </p>

      </div>

      {/* EMISSION */}

      <div className="insight-item">

        <FaLeaf />

        <p>

          Carbon Emission:
          {" "}

          {carbonEmission}
          {" "}
          kg

        </p>

      </div>

      {/* DIFFICULTY */}

      <div className="insight-item">

        <FaRoad />

        <p>

          Route Difficulty:
          {" "}

          {getDifficulty()}

        </p>

      </div>

      {/* AI */}

      <div className="insight-item">

        <FaBrain />

        <p>

          AI suggests maintaining
          steady driving speed for
          optimal efficiency.

        </p>

      </div>

    </div>

  );

}

export default TravelInsights;
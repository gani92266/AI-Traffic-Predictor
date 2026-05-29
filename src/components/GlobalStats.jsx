import "./GlobalStats.css";

import {

  FaGlobe,
  FaCar,
  FaChartLine,
  FaServer,

} from "react-icons/fa";

function GlobalStats() {

  const stats = [

    {

      icon: <FaCar />,

      title: "Active Vehicles",

      value: "1.2M+",

    },

    {

      icon: <FaChartLine />,

      title: "Traffic Optimization",

      value: "94%",

    },

    {

      icon: <FaGlobe />,

      title: "Connected Cities",

      value: "120+",

    },

    {

      icon: <FaServer />,

      title: "System Uptime",

      value: "99.99%",

    },

  ];

  return (

    <div className="global-stats-card">

      <h2>
        🌎 Global AI Traffic Network
      </h2>

      <div className="global-grid">

        {stats.map((item, index) => (

          <div

            key={index}

            className="global-item"

          >

            <div className="global-icon">

              {item.icon}

            </div>

            <h3>
              {item.value}
            </h3>

            <p>
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default GlobalStats;
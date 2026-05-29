import "./SystemSensors.css";

import {

  FaWifi,
  FaMapMarkerAlt,
  FaCookie,
  FaMobileAlt,
  FaLanguage,

} from "react-icons/fa";

function SystemSensors() {

  const sensors = [

    {

      icon: <FaWifi />,

      title: "Internet",

      value:
        navigator.onLine
          ? "Connected"
          : "Offline",

    },

    {

      icon: <FaMapMarkerAlt />,

      title: "GPS",

      value:
        navigator.geolocation
          ? "Available"
          : "Unavailable",

    },

    {

      icon: <FaCookie />,

      title: "Cookies",

      value:
        navigator.cookieEnabled
          ? "Enabled"
          : "Disabled",

    },

    {

      icon: <FaMobileAlt />,

      title: "Touch Support",

      value:
        "ontouchstart" in window
          ? "Supported"
          : "Not Supported",

    },

    {

      icon: <FaLanguage />,

      title: "Language",

      value: navigator.language,

    },

  ];

  return (

    <div className="sensor-card">

      {/* HEADER */}

      <h2>
        📶 System Sensors
      </h2>

      {/* GRID */}

      <div className="sensor-grid">

        {sensors.map((item, index) => (

          <div

            key={index}

            className="sensor-item"

          >

            <div className="sensor-icon">

              {item.icon}

            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.value}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default SystemSensors;
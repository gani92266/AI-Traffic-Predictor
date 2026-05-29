import "./Navbar.css";

import {
  FaRobot,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <header className="navbar">

      <div className="logo-section">

        <h1>
          AI Traffic Predictor
          <FaRobot className="robot-icon" />
        </h1>

        <p>
          Smart Route Prediction & Live Analytics
        </p>

      </div>

      {/* TOGGLE */}

      <button
        className="theme-toggle"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >

        {darkMode
          ? <FaSun />
          : <FaMoon />}

      </button>

    </header>
  );
}

export default Navbar;
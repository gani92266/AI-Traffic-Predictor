import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaRobot,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">

        <FaRobot className="footer-robot" />

        <h2>AI Traffic Predictor</h2>

      </div>

      <p>
        Smart City AI Dashboard • Built with React
      </p>

      <div className="footer-icons">

        <FaGithub />

        <FaLinkedin />

      </div>

    </footer>
  );
}

export default Footer;
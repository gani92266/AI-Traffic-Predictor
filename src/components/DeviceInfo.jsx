import "./DeviceInfo.css";

import {

  FaLaptopCode,

} from "react-icons/fa";

function DeviceInfo() {

  const info = {

    platform:
      navigator.platform,

    browser:
      navigator.userAgent,

    cores:
      navigator.hardwareConcurrency,

    width:
      window.screen.width,

    height:
      window.screen.height,

  };

  return (

    <div className="device-card">

      {/* HEADER */}

      <div className="device-header">

        <FaLaptopCode />

        <h2>
          Device Information
        </h2>

      </div>

      {/* INFO */}

      <div className="device-grid">

        <div className="device-item">

          <h3>
            Platform
          </h3>

          <p>
            {info.platform}
          </p>

        </div>

        <div className="device-item">

          <h3>
            CPU Cores
          </h3>

          <p>
            {info.cores}
          </p>

        </div>

        <div className="device-item">

          <h3>
            Resolution
          </h3>

          <p>

            {info.width} ×
            {info.height}

          </p>

        </div>

        <div className="device-item">

          <h3>
            Browser
          </h3>

          <p className="browser-text">

            {info.browser}

          </p>

        </div>

      </div>

    </div>

  );

}

export default DeviceInfo;
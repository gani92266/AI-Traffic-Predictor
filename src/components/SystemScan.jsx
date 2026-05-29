import "./SystemScan.css";

import {

  FaSatelliteDish,

} from "react-icons/fa";

function SystemScan() {

  return (

    <div className="scan-card">

      {/* HEADER */}

      <div className="scan-header">

        <FaSatelliteDish className="scan-icon" />

        <h2>
          AI System Scan
        </h2>

      </div>

      {/* SCAN BAR */}

      <div className="scan-container">

        <div className="scan-line"></div>

      </div>

      {/* STATUS */}

      <div className="scan-status">

        <p>
          Scanning traffic systems...
        </p>

        <span>
          ACTIVE
        </span>

      </div>

    </div>

  );

}

export default SystemScan;
import "./CommandCenter.css";

import {

  FaTerminal,

} from "react-icons/fa";

function CommandCenter() {

  const logs = [

    "Initializing AI Traffic Engine...",

    "GPS satellites connected.",

    "Weather API synchronized.",

    "Traffic analytics online.",

    "AI optimization running.",

    "System security stable.",

  ];

  return (

    <div className="terminal-card">

      {/* HEADER */}

      <div className="terminal-header">

        <FaTerminal />

        <h2>
          AI Command Center
        </h2>

      </div>

      {/* TERMINAL */}

      <div className="terminal-body">

        {logs.map((log, index) => (

          <p key={index}>

            {">"} {log}

          </p>

        ))}

      </div>

    </div>

  );

}

export default CommandCenter;
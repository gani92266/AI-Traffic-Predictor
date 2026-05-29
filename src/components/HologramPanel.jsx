import "./HologramPanel.css";

function HologramPanel() {

  return (

    <div className="hologram-card">

      {/* CORE */}

      <div className="core-container">

        <div className="core-ring"></div>

        <div className="core-ring second"></div>

        <div className="core-center"></div>

      </div>

      {/* TEXT */}

      <h2>
        AI Neural Core
      </h2>

      <p>
        Smart traffic intelligence
        operating normally
      </p>

      {/* STATUS */}

      <div className="holo-status">

        <span></span>

        ONLINE

      </div>

    </div>

  );

}

export default HologramPanel;
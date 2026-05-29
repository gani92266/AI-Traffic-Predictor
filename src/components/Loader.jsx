import "./Loader.css";

function Loader() {

  return (

    <div className="loader-screen">

      {/* GLOW */}

      <div className="loader-glow"></div>

      {/* SPINNER */}

      <div className="loader-ring"></div>

      {/* TEXT */}

      <h1>
        AI Traffic Predictor
      </h1>

      <p>
        Initializing Smart Systems...
      </p>

    </div>

  );

}

export default Loader;
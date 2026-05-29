import "./RouteHistory.css";

import {

  FaHistory,
  FaMapMarkerAlt,
  FaTrash,

} from "react-icons/fa";

function RouteHistory({

  history,
  setSelectedRoute,
  setHistory,

}) {

  /* CLEAR HISTORY */

  const clearHistory = () => {

    setHistory([]);

    localStorage.removeItem(
      "routeHistory"
    );

  };

  return (

    <div className="history-card">

      {/* HEADER */}

      <div className="history-header">

        <div className="history-title">

          <FaHistory className="history-icon" />

          <h2>Recent Routes</h2>

        </div>

        {/* CLEAR */}

        {history.length > 0 && (

          <button

            className="clear-history"

            onClick={clearHistory}

          >

            <FaTrash />

          </button>

        )}

      </div>

      {/* EMPTY */}

      {history.length === 0 && (

        <p className="empty-history">

          No recent routes yet.

        </p>

      )}

      {/* ROUTES */}

      {history.map((item, index) => (

        <div

          key={index}

          className="history-item"

          onClick={() =>
            setSelectedRoute(item)
          }

        >

          <FaMapMarkerAlt
            className="mini-history-icon"
          />

          <p>

            {item.start}
            {" → "}
            {item.destination}

          </p>

        </div>

      ))}

    </div>

  );

}

export default RouteHistory;
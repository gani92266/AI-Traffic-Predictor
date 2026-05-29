import "./ActivityFeed.css";

import {

  useEffect,
  useState,

} from "react";

import {

  FaBrain,

} from "react-icons/fa";

function ActivityFeed() {

  const activities = [

    "AI recalculating optimized route...",

    "Traffic density scan completed.",

    "GPS synchronization successful.",

    "Weather conditions updated.",

    "AI congestion prediction active.",

    "Emergency monitoring enabled.",

    "Neural traffic engine stable.",

    "Smart routing optimization complete.",

  ];

  const [feed, setFeed] =
    useState([]);

  /* LIVE FEED */

  useEffect(() => {

    const interval = setInterval(() => {

      const randomActivity =

        activities[
          Math.floor(
            Math.random() *
            activities.length
          )
        ];

      setFeed((prev) => [

        {

          text: randomActivity,

          time:
            new Date().toLocaleTimeString(),

        },

        ...prev.slice(0, 5),

      ]);

    }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div className="activity-card">

      {/* HEADER */}

      <div className="activity-header">

        <FaBrain />

        <h2>
          Live AI Activity Feed
        </h2>

      </div>

      {/* FEED */}

      <div className="activity-feed">

        {feed.map((item, index) => (

          <div

            key={index}

            className="activity-item"

          >

            <p>
              {item.text}
            </p>

            <span>
              {item.time}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default ActivityFeed;
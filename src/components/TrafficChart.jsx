import "./TrafficChart.css";

import {

  useEffect,
  useState,

} from "react";

import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,

} from "recharts";

function TrafficChart({

  realStats,

}) {

  const [data, setData] =
    useState([]);

  /* LIVE CHART */

  useEffect(() => {

    const interval = setInterval(() => {

      const trafficLevel =

        Math.floor(
          Math.random() * 100
        );

      const time =
        new Date()
          .toLocaleTimeString();

      setData((prev) => [

        ...prev.slice(-9),

        {

          time,

          traffic:
            trafficLevel,

        },

      ]);

    }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <div className="chart-card">

      <h2>
        📊 Live Traffic Analytics
      </h2>

      <div className="chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <LineChart data={data}>

            <XAxis
              dataKey="time"
            />

            <YAxis />

            <Tooltip />

            <Line

              type="monotone"

              dataKey="traffic"

              stroke="#00ffff"

              strokeWidth={3}

            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default TrafficChart;
import "./BatteryMonitor.css";

import {

  useEffect,
  useState,

} from "react";

import {

  FaBatteryHalf,
  FaBolt,

} from "react-icons/fa";

function BatteryMonitor() {

  const [batteryLevel, setBatteryLevel] =
    useState(0);

  const [charging, setCharging] =
    useState(false);

  /* GET BATTERY */

  useEffect(() => {

    const getBatteryInfo =
      async () => {

        if (
          navigator.getBattery
        ) {

          const battery =
            await navigator.getBattery();

          setBatteryLevel(

            Math.floor(
              battery.level * 100
            )

          );

          setCharging(
            battery.charging
          );

          battery.addEventListener(

            "levelchange",

            () => {

              setBatteryLevel(

                Math.floor(
                  battery.level * 100
                )

              );

            }

          );

          battery.addEventListener(

            "chargingchange",

            () => {

              setCharging(
                battery.charging
              );

            }

          );

        }

      };

    getBatteryInfo();

  }, []);

  return (

    <div className="battery-card">

      {/* HEADER */}

      <div className="battery-header">

        <FaBatteryHalf />

        <h2>
          Device Battery
        </h2>

      </div>

      {/* LEVEL */}

      <h1>
        {batteryLevel}%
      </h1>

      {/* STATUS */}

      <div className="battery-status">

        {charging ? (

          <>

            <FaBolt />

            Charging

          </>

        ) : (

          "Not Charging"

        )}

      </div>

    </div>

  );

}

export default BatteryMonitor;
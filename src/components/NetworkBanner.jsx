import "./NetworkBanner.css";

import {

  FaWifi,
  FaExclamationTriangle,

} from "react-icons/fa";

import {

  useEffect,
  useState,

} from "react";

function NetworkBanner() {

  const [online, setOnline] =
    useState(navigator.onLine);

  useEffect(() => {

    const goOnline = () =>
      setOnline(true);

    const goOffline = () =>
      setOnline(false);

    window.addEventListener(
      "online",
      goOnline
    );

    window.addEventListener(
      "offline",
      goOffline
    );

    return () => {

      window.removeEventListener(
        "online",
        goOnline
      );

      window.removeEventListener(
        "offline",
        goOffline
      );

    };

  }, []);

  return (

    <div

      className={
        online
          ? "network-banner online"
          : "network-banner offline"
      }

    >

      {online ? (

        <>

          <FaWifi />

          <p>
            Connected to Internet
          </p>

        </>

      ) : (

        <>

          <FaExclamationTriangle />

          <p>
            No Internet Connection
          </p>

        </>

      )}

    </div>

  );

}

export default NetworkBanner;
import "./Dashboard.css";

import {

  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,

} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "leaflet-routing-machine";

import L from "leaflet";

import {

  useEffect,
  useState,

} from "react";

/* RECENTER */

function RecenterMap({

  position,

}) {

  const map = useMap();

  useEffect(() => {

    map.setView(position, 13);

  }, [position]);

  return null;

}

/* ROUTING */

function Routing({

  routeData,

}) {

  const map = useMap();

  useEffect(() => {

    if (!routeData) return;

    const routingControl =

      L.Routing.control({

        waypoints: [

          L.latLng(
            routeData.start[0],
            routeData.start[1]
          ),

          L.latLng(
            routeData.end[0],
            routeData.end[1]
          ),

        ],

        lineOptions: {

          styles: [

            {

              color: "cyan",

              weight: 5,

            },

          ],

        },

        addWaypoints: false,

        draggableWaypoints: false,

        fitSelectedRoutes: true,

        show: false,

      }).addTo(map);

    return () => {

      map.removeControl(
        routingControl
      );

    };

  }, [routeData]);

  return null;

}

function Dashboard({

  routeData,

}) {

  /* USER LOCATION */

  const [position, setPosition] =
    useState([12.9716, 77.5946]);

  /* SATELLITE */

  const [satellite, setSatellite] =
    useState(false);

  /* LIVE TRACKING */

  useEffect(() => {

    const watchId =

      navigator.geolocation.watchPosition(

        (location) => {

          setPosition([

            location.coords.latitude,

            location.coords.longitude,

          ]);

        },

        (error) => {

          console.log(error);

        },

        {

          enableHighAccuracy: true,

        }

      );

    return () =>

      navigator.geolocation.clearWatch(
        watchId
      );

  }, []);

  return (

    <div className="map-card">

      {/* HEADER */}

      <div className="map-header">

        <h2>
          🛰 Live Smart Map
        </h2>

        <button

          className="satellite-btn"

          onClick={() =>

            setSatellite(
              !satellite
            )

          }

        >

          {satellite

            ? "Normal View"

            : "Satellite View"}

        </button>

      </div>

      {/* MAP */}

      <MapContainer

        center={position}

        zoom={13}

        className="real-map"

      >

        {/* TILE */}

        {satellite ? (

          <TileLayer

            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"

          />

        ) : (

          <TileLayer

            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

          />

        )}

        {/* USER MARKER */}

        <Marker position={position}>

          <Popup>
            Your Live Location
          </Popup>

        </Marker>

        {/* RECENTER */}

        <RecenterMap
          position={position}
        />

        {/* ROUTE */}

        {routeData && (

          <Routing
            routeData={routeData}
          />

        )}

      </MapContainer>

    </div>

  );

}

export default Dashboard;
import "./SearchBar.css";

import {

  useEffect,
  useState,

} from "react";

function SearchBar({

  setRouteData,
  setRealStats,
  setWeather,

  voiceDestination,

  setHistory,
  history,

  selectedRoute,

}) {

  /* START */

  const [start, setStart] =
    useState("");

  /* DESTINATION */

  const [destination, setDestination] =
    useState("");

  /* LOADING */

  const [loading, setLoading] =
    useState(false);

  /* AUTO CURRENT LOCATION */

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(

      async (location) => {

        const lat =
          location.coords.latitude;

        const lon =
          location.coords.longitude;

        try {

          const response = await fetch(

            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`

          );

          const data = await response.json();

          const city =

            data.address.city ||

            data.address.town ||

            data.address.village ||

            "";

          setStart(city);

        } catch (error) {

          console.log(error);

        }

      }

    );

  }, []);

  /* AUTO VOICE DESTINATION */

  useEffect(() => {

    if (voiceDestination) {

      setDestination(
        voiceDestination
      );

    }

  }, [voiceDestination]);

  /* CLICK HISTORY */

  useEffect(() => {

    if (selectedRoute) {

      setStart(
        selectedRoute.start
      );

      setDestination(
        selectedRoute.destination
      );

      /* AUTO ROUTE */

      setTimeout(() => {

        const button =

          document.querySelector(
            ".search-bar button"
          );

        if (button) {

          button.click();

        }

      }, 500);

    }

  }, [selectedRoute]);

  /* GET COORDINATES */

  const getCoordinates = async (place) => {

    const response = await fetch(

      `https://nominatim.openstreetmap.org/search?format=json&q=${place}`

    );

    const data = await response.json();

    if (data.length === 0) {

      return null;

    }

    return [

      parseFloat(data[0].lat),

      parseFloat(data[0].lon),

    ];

  };

  /* WEATHER */

  const getWeather = async (lat, lon) => {

    const apiKey =

      import.meta.env
        .VITE_WEATHER_API_KEY;

    const response = await fetch(

      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    );

    const data = await response.json();

    if (data.main && data.weather) {

      setWeather({

        temp: data.main.temp,

        condition:
          data.weather[0].main,

      });

    }

  };

  /* HANDLE ROUTE */

  const handlePrediction = async () => {

    if (!start || !destination) {

      alert(
        "Enter locations"
      );

      return;

    }

    setLoading(true);

    try {

      /* START COORDS */

      const startCoords =

        await getCoordinates(start);

      /* END COORDS */

      const endCoords =

        await getCoordinates(
          destination
        );

      if (
        !startCoords ||
        !endCoords
      ) {

        alert(
          "Location not found"
        );

        setLoading(false);

        return;

      }

      /* SAVE HISTORY */

      setHistory([

        {

          start,

          destination,

        },

        ...history,

      ]);

      /* ROUTE */

      setRouteData({

        start: startCoords,

        end: endCoords,

      });

      /* WEATHER */

      await getWeather(

        endCoords[0],

        endCoords[1]

      );

      /* ROUTING API */

      const apiKey =

        import.meta.env
          .VITE_ORS_API_KEY;

      const response = await fetch(

        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${startCoords[1]},${startCoords[0]}&end=${endCoords[1]},${endCoords[0]}`

      );

      const data =
        await response.json();

      const summary =

        data.features[0]
        .properties.summary;

      const distanceKm =

        (
          summary.distance / 1000
        ).toFixed(1);

      const etaMinutes =

        Math.ceil(
          summary.duration / 60
        );

      /* REAL STATS */

      setRealStats({

        distance:
          `${distanceKm} KM`,

        eta:
          `${etaMinutes} mins`,

      });

    } catch (error) {

      console.log(error);

      alert(error.message);

    }

    setLoading(false);

  };

  return (

    <div className="search-bar">

      {/* START */}

      <input

        type="text"

        placeholder="Enter Start Location"

        value={start}

        onChange={(e) =>

          setStart(e.target.value)

        }

      />

      {/* DESTINATION */}

      <input

        type="text"

        placeholder="Enter Destination"

        value={destination}

        onChange={(e) =>

          setDestination(
            e.target.value
          )

        }

      />

      {/* BUTTON */}

      <button

        onClick={handlePrediction}

      >

        {loading

          ? "Generating Smart Route..."

          : "Predict Route"}

      </button>

    </div>

  );

}

export default SearchBar;
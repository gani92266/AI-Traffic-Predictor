import "./WeatherWidget.css";

import {

  useEffect,
  useState,

} from "react";

function WeatherWidget() {

  const [forecast, setForecast] =
    useState([]);

  /* GET FORECAST */

  useEffect(() => {

    const getForecast =
      async () => {

        try {

          const apiKey =

            import.meta.env
              .VITE_WEATHER_API_KEY;

          const response =
            await fetch(

              `https://api.openweathermap.org/data/2.5/forecast?q=Bangalore&appid=${apiKey}&units=metric`

            );

          const data =
            await response.json();

          const filtered =
            data.list.filter(

              (_, index) =>

                index % 8 === 0

            );

          setForecast(filtered);

        }

        catch (error) {

          console.log(error);

        }

      };

    getForecast();

  }, []);

  return (

    <div className="weather-card">

      <h2>
        🌦 5-Day Forecast
      </h2>

      <div className="forecast-grid">

        {forecast.map((item, index) => (

          <div

            key={index}

            className="forecast-item"

          >

            <h3>

              {new Date(
                item.dt_txt
              ).toLocaleDateString()}

            </h3>

            <p>

              🌡 {item.main.temp}°C

            </p>

            <p>

              ☁ {

                item.weather[0]
                .main

              }

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default WeatherWidget;
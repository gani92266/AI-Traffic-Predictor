import "./FavoritePlaces.css";

import {

  FaStar,
  FaMapMarkerAlt,

} from "react-icons/fa";

function FavoritePlaces({

  setVoiceDestination,

}) {

  const places = [

    "Airport",

    "Bangalore",

    "Mumbai",

    "Hyderabad",

    "Chennai",

    "Mysore",

  ];

  const handlePlace = (place) => {

    setVoiceDestination(place);

    setTimeout(() => {

      const button =

        document.querySelector(
          ".search-bar button"
        );

      if (button) {

        button.click();

      }

    }, 500);

  };

  return (

    <div className="favorites-card">

      <div className="favorites-header">

        <FaStar className="fav-icon" />

        <h2>
          Favorite Destinations
        </h2>

      </div>

      <div className="favorites-grid">

        {places.map((place) => (

          <button

            key={place}

            className="favorite-btn"

            onClick={() =>
              handlePlace(place)
            }

          >

            <FaMapMarkerAlt />

            <span>
              {place}
            </span>

          </button>

        ))}

      </div>

    </div>

  );

}

export default FavoritePlaces;
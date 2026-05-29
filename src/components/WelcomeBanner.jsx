import "./WelcomeBanner.css";

function WelcomeBanner() {

  const hour =
    new Date().getHours();

  let greeting = "";

  if (hour < 12) {

    greeting =
      "Good Morning ☀️";

  }

  else if (hour < 18) {

    greeting =
      "Good Afternoon 🌤️";

  }

  else {

    greeting =
      "Good Evening 🌙";

  }

  return (

    <div className="welcome-banner">

      <h1>
        {greeting}
      </h1>

      <p>

        Welcome to your
        AI-powered Smart
        Traffic Dashboard

      </p>

    </div>

  );

}

export default WelcomeBanner;
import "./App.css";

import { useEffect, useState } from "react";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import NetworkBanner from "./components/NetworkBanner";
import WelcomeBanner from "./components/WelcomeBanner";
import SearchBar from "./components/SearchBar";
import FavoritePlaces from "./components/FavoritePlaces";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import WeatherWidget from "./components/WeatherWidget";
import TrafficChart from "./components/TrafficChart";
import VoiceAssistant from "./components/VoiceAssistant";
import SystemStatus from "./components/SystemStatus";
import AIPanel from "./components/AIPanel";
import LiveClock from "./components/LiveClock";
import Notifications from "./components/Notifications";
import RouteHistory from "./components/RouteHistory";
import TravelInsights from "./components/TravelInsights";
import PerformanceMonitor from "./components/PerformanceMonitor";
import EmergencyAlerts from "./components/EmergencyAlerts";

import GlobalStats from "./components/GlobalStats";
import ActivityFeed from "./components/ActivityFeed";
import SystemScan from "./components/SystemScan";
import HologramPanel from "./components/HologramPanel";
import CommandCenter from "./components/CommandCenter";
import ExportButton from "./components/ExportButton";
import Footer from "./components/Footer";
import SpeedMonitor from "./components/SpeedMonitor";
import InternetSpeed from "./components/InternetSpeed";
import BatteryMonitor from "./components/BatteryMonitor";
import DeviceInfo from "./components/DeviceInfo";
import SystemSensors from "./components/SystemSensors";

function App() {

  /* LOADER */

  const [loading, setLoading] =
    useState(true);

  /* DARK MODE */

  const [darkMode, setDarkMode] =
    useState(() => {

      const savedTheme =
        localStorage.getItem("theme");

      return savedTheme
        ? JSON.parse(savedTheme)
        : true;

    });

  /* ROUTE DATA */

  const [routeData, setRouteData] =
    useState(null);

  /* REAL ANALYTICS */

  const [realStats, setRealStats] =
    useState({

      eta: "--",

      distance: "--",

    });

  /* WEATHER */

  const [weather, setWeather] =
    useState(null);

  /* VOICE DESTINATION */

  const [
    voiceDestination,
    setVoiceDestination,
  ] = useState("");

  /* ROUTE HISTORY */

  const [history, setHistory] =
    useState([]);

  /* SELECTED ROUTE */

  const [
    selectedRoute,
    setSelectedRoute,
  ] = useState(null);

  /* NAVIGATION MODE */

  const [
    selectedMode,
    setSelectedMode,
  ] = useState("AI Smart");

  /* LOAD SAVED HISTORY */

  useEffect(() => {

    const savedHistory =

      localStorage.getItem(
        "routeHistory"
      );

    if (savedHistory) {

      setHistory(
        JSON.parse(savedHistory)
      );

    }

  }, []);

  /* SAVE HISTORY */

  useEffect(() => {

    localStorage.setItem(

      "routeHistory",

      JSON.stringify(history)

    );

  }, [history]);

  /* SAVE THEME */

  useEffect(() => {

    localStorage.setItem(

      "theme",

      JSON.stringify(darkMode)

    );

  }, [darkMode]);

  /* APP LOADER */

  useEffect(() => {

    setTimeout(() => {

      setLoading(false);

    }, 2500);

  }, []);

  /* SHOW LOADER */

  if (loading) {

    return <Loader />;

  }

  return (

    <div
      className={
        darkMode
          ? "app"
          : "app light"
      }
    >

      {/* PARTICLES BACKGROUND */}

    

      {/* NAVBAR */}

      <Navbar

        darkMode={darkMode}

        setDarkMode={setDarkMode}

      />

      {/* NETWORK STATUS */}

      <NetworkBanner />

      {/* WELCOME */}
    
      <DeviceInfo />
      <SystemSensors />
      

      <WelcomeBanner />

      {/* SEARCH */}

      <SearchBar

        setRouteData={setRouteData}

        setRealStats={setRealStats}

        setWeather={setWeather}

        voiceDestination={voiceDestination}

        setHistory={setHistory}

        history={history}

        selectedRoute={selectedRoute}

      />

      {/* NAVIGATION */}

     

      {/* FAVORITES */}

      <FavoritePlaces

        setVoiceDestination={
          setVoiceDestination
        }

      />

      {/* MAP */}

      <Dashboard

        routeData={routeData}

      />

      {/* ANALYTICS */}

      <Analytics

        realStats={realStats}

        weather={weather}

      />
      <SpeedMonitor />
      <InternetSpeed />
      <BatteryMonitor />

      {/* WEATHER */}

      <WeatherWidget

        weather={weather}

      />

      {/* TRAFFIC */}

      <TrafficChart

        realStats={realStats}

      />

      {/* VOICE */}

      <VoiceAssistant

        setVoiceDestination={
          setVoiceDestination
        }

      />

      {/* SYSTEM */}

      <SystemStatus />

      {/* AI PANEL */}

      <AIPanel

        realStats={realStats}

        weather={weather}

      />

      {/* CLOCK */}

      <LiveClock />

      {/* NOTIFICATIONS */}

      <Notifications

        realStats={realStats}

        weather={weather}

      />

      {/* HISTORY */}

      <RouteHistory

        history={history}

        setSelectedRoute={
          setSelectedRoute
        }

        setHistory={setHistory}

      />

      {/* INSIGHTS */}

      <TravelInsights

        realStats={realStats}

      />

      {/* PERFORMANCE */}

      <PerformanceMonitor />

      {/* ALERTS */}

      <EmergencyAlerts

        weather={weather}

        realStats={realStats}

      />

      {/* AI CHAT */}


      <GlobalStats />

      {/* ACTIVITY */}

      <ActivityFeed />

      {/* SYSTEM SCAN */}

      <SystemScan />

      {/* HOLOGRAM */}

      <HologramPanel />

      {/* COMMAND CENTER */}

      <CommandCenter />

      {/* WORLD NETWORK */}

      

      <ExportButton />

      {/* FOOTER */}

      <Footer />

    </div>

  );

}

export default App;
import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "19c53d830458075a54d21b1f1bd81baf";

  const weatherIcons = {
    Clear: faSun,
    Clouds: faCloudSun,
    Rain: faCloudShowersHeavy,
    Snow: faSnowflake,
    Mist: faSmog,
    Smoke: faSmog,
    Haze: faSmog,
    Dust: faSmog,
    Fog: faSmog,
    Sand: faSmog,
    Ash: faSmog,
    Squall: faSmog,
    Tornado: faSmog,
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("Error fetching data. Please try again.");
    }

    setLoading(false);
  };

  const getWeatherIcon = (weather) => {
    if (weatherIcons[weather]) {
      return <FontAwesomeIcon icon={weatherIcons[weather]} size="5x" />;
    } else {
      return null;
    }
  };

  const getBackgroundImage = (weather) => {
    switch (weather) {
      case "Clear":
        return "https://source.unsplash.com/featured/?clear sky";
      case "Clouds":
        return "https://source.unsplash.com/featured/?cloudy";
      case "Rain":
        return "https://source.unsplash.com/featured/?rain";
      case "Snow":
        return "https://source.unsplash.com/featured/?snow";
      case "Mist":
      case "Smoke":
      case "Haze":
      case "Dust":
      case "Fog":
      case "Sand":
      case "Ash":
      case "Squall":
      case "Tornado":
        return "https://source.unsplash.com/featured/?fog";
      default:
        return null;
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${getBackgroundImage(
          weatherData ? weatherData.weather[0].main : ""
        )})`,
      }}
    >
      <div className="overlay">
        <h1>Weather App</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <br />
          <button onClick={fetchWeatherData}>Get Weather</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weatherData && (
          <div className="weather-info">
            <h2>
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            {getWeatherIcon(weatherData.weather[0].main)}
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

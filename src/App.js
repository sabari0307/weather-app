import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import './App.css';
import "weather-icons/css/weather-icons.css";


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    const apiKey = "03cfdf10c922735b9b1813c9f75b4530";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Live Weather </h1>
      <SearchBar fetchWeather={fetchWeather} />
      {loading ? <p>Loading...</p> : <WeatherDisplay weatherData={weatherData} />}
      <p>Designed by Sabari</p>
    </div>
  );
};

export default App;

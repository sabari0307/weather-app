import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Enter a city to view the weather.</p>;
  }

  // Map weather condition to icon
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return "wi-day-sunny";
      case "Clouds":
        return "wi-cloudy";
      case "Rain":
        return "wi-rain";
      case "Thunderstorm":
        return "wi-thunderstorm";
      case "Snow":
        return "wi-snow";
      case "Mist":
      case "Fog":
        return "wi-fog";
      default:
        return "wi-na";
    }
  };

  const weatherCondition = weatherData.weather[0].main; // Get main weather condition
  const weatherIcon = getWeatherIcon(weatherCondition);

  return (
    <div className="weather-info">
      <h2>{weatherData.name}</h2>
      <i className={`wi ${weatherIcon} weather-icon`}></i>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherCondition}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;

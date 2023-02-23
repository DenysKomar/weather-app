import IWeatherInfo from "./WeatherInfo.props";
import "./WeatherInfo.scss";
import { useState } from "react";
import React from "react";

const WeatherInfo = ({ degrees, city, date, day, status }: IWeatherInfo) => {
  const [weatherbg, setWeatherbg] = useState("weatherContainer");
  return (
    <div className="weatherContainer" role="weather-container">
      <span className="degrees" role="info">
        {degrees < 10 ? `0${degrees}` : `${degrees}`}°
      </span>
      <span className="city" role="info">
        <p>{city}</p>{" "}
        <p className="date">
          {date} {day}
        </p>
      </span>
      <span className="weather" role="info">
        <img src="../src/assets/rain.svg" alt="rain" />
        <p>{status}</p>
      </span>
    </div>
  );
};

export default WeatherInfo;

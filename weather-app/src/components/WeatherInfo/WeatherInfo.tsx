import IWeatherInfo from "./WeatherInfo.props";
import "./WeatherInfo.scss";
import React from "react";

const WeatherInfo = ({ degrees, city, date, status }: IWeatherInfo) => {
  const { time, daystr, daynum, month, year } = date || {};
  return (
    <div className="weatherContainer" role="weather-container">
      <span className="degrees" role="info">
        {degrees < 10 ? `0${degrees}` : `${degrees}`}°
      </span>
      <span className="city" role="info">
        <p>{city}</p>
        <p className="date" role="date">
          {time} {` - `} {daystr}, {daynum} {month ? month.substring(0, 3) : ""}{" "}
          {` '`}
          {year ? year.substring(2, 4) : ""}
        </p>
      </span>
      <span className="weather" role="info">
        <img
          src={`../src/assets/${status ? status : "clouds"}.svg`}
          alt="rain"
          role="status"
        />
        <p>{status}</p>
      </span>
    </div>
  );
};

export default WeatherInfo;

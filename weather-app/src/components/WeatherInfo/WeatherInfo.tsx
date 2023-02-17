import IWeatherInfo from "./WeatherInfo.props";
import style from "./WeatherInfo.module.scss";

const WeatherInfo = ({ degrees, city, date, day, status }: IWeatherInfo) => {
  return (
    <div className={style.weatherContainer} role="weather-container">
      <h1>{degrees}</h1>
      <h1>{city}</h1>
      <h1>{date}</h1>
      <h1>{status}</h1>
      <h1>{day}</h1>
    </div>
  );
};

export default WeatherInfo;

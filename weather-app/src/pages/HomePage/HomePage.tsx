import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import "./HomePage.scss";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../state/state";
const HomePage = (): JSX.Element => {
  const { degrees, date, day, city, status } = useSelector(
    (state: RootState) => state.weatherData
  );
  return (
    <main className="container">
      <WeatherInfo
        degrees={degrees}
        city={city}
        date={date}
        day={day}
        status={status}
      ></WeatherInfo>
    </main>
  );
};

export default HomePage;

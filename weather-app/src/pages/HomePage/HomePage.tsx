import React from "react";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import "./HomePage.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../state/state";
const HomePage = (): JSX.Element => {
  const { degrees, date, day, city, status } = useSelector(
    (state: RootState) => state.weatherData || {}
  );
  return (
    <main className="container">
      <WeatherInfo
        degrees={degrees}
        city={city}
        date={date}
        day={day}
        status={status}
      />
    </main>
  );
};

export default HomePage;

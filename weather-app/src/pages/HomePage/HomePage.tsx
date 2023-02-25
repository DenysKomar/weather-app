import React, { useEffect } from "react";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import "./HomePage.scss";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/state";

import { fetchWeather } from "../../state/weatherDataSlice/weatherDataSlice";
const HomePage = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { weatherData, isLoading, isError } = useSelector(
    (state: RootState) => state.weatherData || {}
  );
  const { date, degrees, city, status } = weatherData || {};
  useEffect(() => {
    try {
      dispatch(fetchWeather("london"));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <main className="container">
      {!isLoading ? (
        <WeatherInfo
          degrees={degrees}
          city={city}
          date={date}
          status={status}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default HomePage;

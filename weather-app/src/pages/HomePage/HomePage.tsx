import React, { useEffect, useState } from "react";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import "./HomePage.scss";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/state";

import { fetchWeather } from "../../state/weatherDataSlice/weatherDataSlice";
import SideMenu from "../../components/SideMenu/SideMenu";
import { CityData } from "../../components/SideMenu/SideMenu.props";
const HomePage = (): JSX.Element => {
  const cities: CityData[] = [
    {
      name: "London",
    },
    {
      name: "Montreal",
    },
    {
      name: "Tokyo",
    },
    {
      name: "Kiev",
    },
  ];
  const dispatch = useDispatch<AppDispatch>();
  const { weatherData, isLoading, isError, backgroundImage } = useSelector(
    (state: RootState) => state.weatherData || {}
  );
  const { date, degrees, city, status, weatherDetails } = weatherData || {};
  useEffect(() => {
    try {
      dispatch(fetchWeather("london"));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <main
      className={`container`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
      <div className="menu">
        <SideMenu cities={cities} weatherDetails={weatherDetails} />
      </div>
    </main>
  );
};

export default HomePage;

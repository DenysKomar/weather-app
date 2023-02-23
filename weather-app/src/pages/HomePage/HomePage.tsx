import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import "./HomePage.scss";
import React from "react";
const HomePage = (): JSX.Element => {
  return (
    <main className="container">
      <WeatherInfo
        degrees={5}
        city={"London"}
        date={"23"}
        day={"Sunday"}
        status={"Rainy"}
      ></WeatherInfo>
    </main>
  );
};

export default HomePage;

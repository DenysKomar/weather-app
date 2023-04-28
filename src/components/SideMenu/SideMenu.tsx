import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/state";
import { fetchWeather } from "../../state/weatherDataSlice/weatherDataSlice";
import Search from "../Search/Search";
import { SideWindowProps } from "./SideMenu.props";
import "./SideMenu.scss";

const SideMenu: React.FC<SideWindowProps> = ({ cities, weatherDetails }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState<string>("");

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(query.toLowerCase())
  );
  const { cloudy, humidity, rain, wind } = weatherDetails || {};
  const queryRequest = (query: string) => {
    setQuery(query);
  };

  return (
    <div className="side-window">
      <Search query={query} setQuery={setQuery} queryRequest={queryRequest} />

      <div className="cities">
        {filteredCities.length === 0 ? (
          <p>No cities found</p>
        ) : (
          filteredCities.map((city) => <a key={city.name}>{city.name}</a>)
        )}
      </div>
      <hr />

      <div className="weatherDetails">
        <h2>Weather Details</h2>
        <p className="name">
          Cloudy:<span className="value">{cloudy}%</span>
        </p>
        <p className="name">
          Wind:<span className="value">{wind}km/h</span>
        </p>

        <p className="name">
          Humidity:<span className="value">{humidity}%</span>
        </p>

        <p className="name">
          Rain:<span className="value">{rain}mm</span>
        </p>
      </div>
    </div>
  );
};

export default SideMenu;

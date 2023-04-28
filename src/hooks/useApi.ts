import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IWeather } from "../interfaces/weatherInterface";
import { AppDispatch } from "../state/state";
import { fetchWeather } from "../state/weatherDataSlice/weatherDataSlice";
// import {
//   fetchWeatherDataPending,
//   fetchWeatherDataSuccess,
//   fetchWeatherDataError,
// } from "../state/weatherDataSlice/weatherDataSlice";
//  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=452782b3c2e5ad1383553e18c71165a9"

function useApi(city: string) {
  const dispatch = useDispatch<AppDispatch>();
  const [weatherData, setWeatherData] = useState<IWeather & { city: string }>(
    {} as IWeather & { city: string }
  );
  useEffect(() => {
    try {
      const fetchData = async () => {
        dispatch(fetchWeather(city));
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=452782b3c2e5ad1383553e18c71165a9`,
          { params: { units: "metric" } }
        );
        setWeatherData({ city: city, ...data });
        console.log(data);
        dispatch(fetchWeather(city));
      };
      fetchData();
    } catch (err) {
      console.log(err);
      dispatch(fetchWeather(city));
    }
  }, []);

  return weatherData;
}
export default useApi;

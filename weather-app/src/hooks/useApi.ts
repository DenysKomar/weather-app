import axios from "axios";
import { useEffect, useState } from "react";
//  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=452782b3c2e5ad1383553e18c71165a9"
function useApi(city: string) {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=452782b3c2e5ad1383553e18c71165a9`,
          { params: { units: "metric" } }
        );
        console.log(data);
        setWeatherData(data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return weatherData;
}
export default useApi;

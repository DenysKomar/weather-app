import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../../interfaces/weatherInterface";
import axios from "axios";
import config from "../../config";

export interface IWeatherData {
  weatherData: {
    degrees: number;
    city: string;
    date: {
      time: string;
      daystr: string;
      daynum: number;
      month: string;
      year: string;
    };

    status: string;
    weatherDetails: {
      cloudy: number;
      rain: number;
      humidity: number;
      wind: number;
    };
  };
  isLoading: boolean;
  isError: string;
  backgroundImage: string;
}

const initialState: IWeatherData = {
  weatherData: {
    degrees: 2,
    city: "London",
    date: {
      time: `06:53`,
      daystr: "Sunday",
      daynum: 6,
      month: "october",
      year: "2022",
    },
    status: "rain",
    weatherDetails: {
      cloudy: 86,
      humidity: 62,
      wind: 8,
      rain: 0,
    },
  },
  isLoading: false,
  isError: "",
  backgroundImage: "../src/assets/cloudsbg.jpg",
};
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKey}`,
      { params: { units: "metric" } }
    );
    return data;
  }
);

export const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state: IWeatherData) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchWeather.fulfilled,
      (
        state: IWeatherData,
        action: PayloadAction<IWeather & { city: string }>
      ) => {
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        console.log(action.payload);

        const date = new Date();

        state.isLoading = false;
        state.backgroundImage = `../src/assets/${action.payload.weather[0].main.toLowerCase()}bg.jpg`;
        console.log(state.backgroundImage);
        state.weatherData.degrees = Math.round(action.payload.main.temp_max);
        state.weatherData.city = action.payload.name;
        state.weatherData.date.month = monthNames[date.getMonth()];
        state.weatherData.date.daynum = date.getDate();
        state.weatherData.date.daystr = days[date.getDay()];
        state.weatherData.date.year = date.getUTCFullYear().toString();
        state.weatherData.date.time = `${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
        state.weatherData.status = action.payload.weather[0].main;

        state.weatherData.weatherDetails.cloudy = action.payload.clouds.all;
        state.weatherData.weatherDetails.humidity =
          action.payload.main.humidity;
        state.weatherData.weatherDetails.wind = action.payload.wind.speed;
        if (action.payload.rain) {
          state.weatherData.weatherDetails.rain = action.payload.rain["1h"];
        }
      }
    );
    builder.addCase(fetchWeather.rejected, (state: IWeatherData) => {
      state.isLoading = false;
      state.isError = "Error fetching weather";
    });
  },
  reducers: {},
});

export default weatherDataSlice.reducer;

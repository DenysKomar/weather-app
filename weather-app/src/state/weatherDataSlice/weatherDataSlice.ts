import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../state";
import { IWeather } from "../../interfaces/weatherInterface";
import axios from "axios";

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
  };
  isLoading: boolean;
  isError: string;
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
    status: "rainy",
  },
  isLoading: false,
  isError: "",
};
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=452782b3c2e5ad1383553e18c71165a9`,
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

        const date = new Date();

        state.isLoading = false;
        state.weatherData.degrees = Math.round(action.payload.main.temp_max);
        state.weatherData.city = action.payload.name;
        state.weatherData.date.month = monthNames[date.getMonth()];
        state.weatherData.date.daynum = date.getUTCDay();
        state.weatherData.date.daystr = days[date.getUTCDay()];
        state.weatherData.date.year = date.getUTCFullYear().toString();
        state.weatherData.date.time = `${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
        state.weatherData.status = action.payload.weather[0].main;
      }
    );
    builder.addCase(fetchWeather.rejected, (state: IWeatherData) => {
      state.isLoading = false;
      state.isError = "Error fetching weather";
    });
  },
  reducers: {
    // fetchWeatherDataPending: (state: IWeatherData) => {
    //   state.isLoading = true;
    // },
    // fetchWeatherDataError: (state: IWeatherData) => {
    //   state.isLoading = false;
    //   state.isError = "Error fetching weather";
    // },
    // fetchWeatherDataSuccess: (
    //   state: IWeatherData,
    //   action: PayloadAction<IWeather & { city: string }>
    // ) => {
    //   const days = [
    //     "Sunday",
    //     "Monday",
    //     "Tuesday",
    //     "Wednesday",
    //     "Thursday",
    //     "Friday",
    //     "Saturday",
    //   ];
    //   const today = new Date();
    //   const weekday = today.getUTCDay();
    //   state.isLoading = false;
    //   state.weatherData.degrees = Math.round(action.payload.main.temp_max);
    //   state.weatherData.city = action.payload.city;
    //   state.weatherData.date = action.payload.dt;
    //   state.weatherData.day = days[weekday];
    //   state.weatherData.status = action.payload.weather.main;
    //   console.log(days[weekday]);
    // },
  },
});

// Action creators are generated for each case reducer function
// export const {
//   fetchWeatherDataSuccess,
//   fetchWeatherDataPending,
//   fetchWeatherDataError,
// } = weatherDataSlice.actions

export default weatherDataSlice.reducer;

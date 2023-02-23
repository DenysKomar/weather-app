import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IWeatherData {
  degrees: number;
  city: string;
  date: string;
  day: string;
  status: string;
}

const initialState: IWeatherData = {
  degrees: 5,
  city: "London",
  date: "23",
  day: "Sunday",
  status: "Rainy",
};

export const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions;

export default weatherDataSlice.reducer;

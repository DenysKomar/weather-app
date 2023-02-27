export interface WeatherData {
  cloudy: number;
  wind: number;
  humidity: number;
  rain: number;
}

export interface CityData {
  name: string;
}

export interface SideWindowProps {
  cities: CityData[];
  weatherDetails: WeatherData;
}

export default interface IWeatherInfo {
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
}

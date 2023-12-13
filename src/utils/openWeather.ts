import OpenWeatherMap from 'openweathermap-ts';

const OpenWeather = new OpenWeatherMap({
  apiKey: process.env.REACT_APP_OPENWEATHERMAP_API_KEY!,
});

OpenWeather.setUnits('metric');

export default OpenWeather;

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import openWeather from './openWeather';

const getWeatherForecast = (city: string) =>
  openWeather.getThreeHourForecastByCityName({
    cityName: city,
  });

export interface Day {
  date: string;
  forecast: { [x: string]: any }[];
}

const useWeatherForecast = (city: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ['weather-forecast', city],
    queryFn: () => getWeatherForecast(city),
  });

  // console.log(data, rest);

  const days = useMemo(() => {
    const days: Record<string, Day> = {};

    data?.list?.forEach?.((forecast) => {
      const date = forecast.dt_txt.split(' ')[0];
      // console.log(date, 'date');
      let day = days[date];
      // console.log(day, 'day');
      if (!day) {
        day = { date, forecast: [] };
        days[date] = day;
      }

      day.forecast.push(forecast);
    });

    // console.log(Object.values(days), 'Object.values(days)')
    return Object.values(days);
  }, [data]);

  return {
    ...rest,
    data,
    days,
  };
};

export default useWeatherForecast;

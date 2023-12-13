import React from 'react';
import { useParams } from 'react-router-dom';
import useWeatherForecast from '../../utils/useWeatherForecast';
import { AllDaysWrapper } from './styles';

const AllDays = () => {
  const { id } = useParams();

  const { data, isLoading } = useWeatherForecast(id ? id : 'seoul');

  return <AllDaysWrapper>AllDays</AllDaysWrapper>;
};

export default AllDays;

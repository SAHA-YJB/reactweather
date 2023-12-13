import { useParams } from 'react-router-dom';
import useWeatherForecast from '../../utils/useWeatherForecast';
import Day from './Day';
import { AllDaysWrapper } from './styles';

const AllDays = () => {
  const { id } = useParams();

  const { days, isLoading } = useWeatherForecast(id ? id : 'seoul');
  console.log(days);

  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day day={day} key={day.date} />
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;

import React from 'react';
import { SelectWrapper } from './styles';
import CreatableSelect from 'react-select/creatable';
import { CityOption, cityOptions } from './data';
import { ActionMeta, OnChangeValue } from 'react-select';
import { useNavigate } from 'react-router-dom';

const CitySelect = () => {
  const navigate = useNavigate();

  const handleChange = (
    newValue: OnChangeValue<CityOption, false>,
    actionMeta: ActionMeta<CityOption>
  ) => {
    navigate(`/${newValue?.value}`);
  };

  return (
    <SelectWrapper>
      <CreatableSelect
        options={cityOptions}
        defaultValue={null}
        classNamePrefix={'react-select'}
        className='react-select-container'
        onChange={handleChange}
      />
    </SelectWrapper>
  );
};

export default CitySelect;

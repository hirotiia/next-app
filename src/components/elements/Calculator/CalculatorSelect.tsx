import { ChangeEvent, useContext } from 'react';
import { CalculatorDispatchContext } from './CalculatorProvider';

export const CalculatorSelect = () => {
  const options = [
    { name: 'plus', value: '+' },
    { name: 'minus', value: '-' },
    { name: 'multiply', value: '*' },
    { name: 'divide', value: '/' },
  ];

  const SelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const { name } = e.target.dataset;
    const dispatch = useContext(CalculatorDispatchContext);
    dispatch({ value, name });
  };
  return (
    <select title="selector" name="option" onChange={SelectHandler}>
      {options.map((option) => (
        <option value={option.value} key={option.name} data-name={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

import { ChangeEvent, useContext } from 'react';
import { CalculatorDispatchContext } from './CalculatorProvider';

export const CalculatorSelect = () => {
  const dispatch = useContext(CalculatorDispatchContext);
  const options = ['plus', 'minus', 'divide', 'multiply'];

  const SelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    dispatch({ type });
  };
  return (
    <select title="selector" name="option" onChange={SelectHandler}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

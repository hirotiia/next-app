import { ChangeEvent, useContext } from 'react';
import { CalculatorDispatchContext } from './CalculatorProvider';

type InputProps = {
  name: string;
};

export const CalculatorInput = ({ name }: InputProps) => {
  const dispatch = useContext(CalculatorDispatchContext);

  const InputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const type = 'change';
    const { name } = e.target;
    const value = Number(e.target.value);
    dispatch({ type, value, name });
  };
  return (
    <div>
      <label>
        {name}:
        <input type="number" name={name} onChange={InputHandler} />
      </label>
    </div>
  );
};

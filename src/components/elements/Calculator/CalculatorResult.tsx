import { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';

export const CalculatorResult = () => {
  const rstate = useContext(CalculatorContext);
  return (
    <p>
      <b>結果：{rstate.result}</b>
    </p>
  );
};

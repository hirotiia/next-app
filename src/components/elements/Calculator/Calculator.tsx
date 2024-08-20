import { CalculatorInput } from './CalculatorInput';
import { CalculatorProvider } from './CalculatorProvider';
import { CalculatorResult } from './CalculatorResult';
import { CalculatorSelect } from './CalculatorSelect';

export const Caluculator = () => {
  return (
    <CalculatorProvider>
      <CalculatorInput name="a" />
      <CalculatorInput name="b" />
      <CalculatorSelect />
      <CalculatorResult />
    </CalculatorProvider>
  );
};

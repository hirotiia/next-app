import { RState } from './CalculatorProvider';

export type ReducerProps = {
  type: string;
  value?: number | undefined;
  name?: string | undefined;
};

export const CalculatorReducer = (rstate: RState, { type, value, name }: ReducerProps): RState => {
  console.log(rstate);
  switch (type) {
    case 'change':
      return typeof name === 'string' ? { ...rstate, [name]: value } : { ...rstate };
    case 'plus':
      return { ...rstate, result: rstate.a + rstate.b };
    case 'minus':
      return { ...rstate, result: rstate.a - rstate.b };
    case 'multiply':
      return { ...rstate, result: rstate.a * rstate.b };
    case 'divide':
      return { ...rstate, result: rstate.a / rstate.b };
    default:
      throw new Error('不明な値です。');
  }
};

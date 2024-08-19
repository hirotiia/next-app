import { useContext } from 'react';
import { CounterContext } from './CounterProvider';

export const CounterResult = () => {
  const contextValue = useContext(CounterContext);
  if (!contextValue) {
    throw new Error('配列ではありません。');
  }

  const [rstate] = contextValue;

  return <p className="">合計：{rstate.result}</p>;
};

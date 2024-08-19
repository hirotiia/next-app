import { useContext } from 'react';
import { CounterContext } from './CounterProvider';

export const CounterResult = () => {
  const context = useContext(CounterContext);
  return <p className="">合計：{context}</p>;
};

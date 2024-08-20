import { useContext } from 'react';
import { Context } from './CounterContext';

export const CounterResult = () => {
  const contextValue = useContext(Context);
  if (!contextValue) {
    throw new Error('配列ではありません。');
  }

  const rstate = contextValue;

  return <p className="">合計：{rstate.result}</p>;
};

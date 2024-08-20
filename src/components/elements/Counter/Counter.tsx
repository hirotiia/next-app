'use client';

import { CounterButton } from './CounterButton';
import { CounterResult } from './CounterResult';
import { CounterContext } from './CounterContext';

export const Counter = () => {
  const countNumbers = [
    { id: 'a', type: 'minus', amount: 2 },
    { id: 'b', type: 'plus', amount: 2 },
    { id: 'c', type: 'minus', amount: 10 },
    { id: 'd', type: 'plus', amount: 10 },
  ];
  return (
    <CounterContext>
      <CounterResult />
      <CounterButton countNumbers={countNumbers} />
    </CounterContext>
  );
};

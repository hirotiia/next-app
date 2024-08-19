import { createContext, ReactNode, useReducer } from 'react';
import { CounterReducer } from './CounterReducer';
export const CounterContext = createContext('aiueo');

type ContextProps = {
  children: ReactNode;
};

export const CounterProvider = ({ children }: ContextProps) => {
  const initialState = {
    result: 0,
  };
  const [rstate, dispatch] = useReducer(CounterReducer, initialState);

  return <CounterContext.Provider value={[rstate, dispatch]}>{children}</CounterContext.Provider>;
};

import { createContext, ReactNode, useReducer, Dispatch } from 'react';
import { CounterReducer, State, Action } from './CounterReducer';

type ContextProps = {
  children: ReactNode;
};

type CounterContextType = [State, Dispatch<Action>];

const initialState = {
  result: 0,
};

export const CounterContext = createContext<CounterContextType>([initialState, () => {}]);
export const CounterProvider = ({ children }: ContextProps) => {
  const [rstate, dispatch] = useReducer(CounterReducer, initialState);

  return <CounterContext.Provider value={[rstate, dispatch]}>{children}</CounterContext.Provider>;
};

import { createContext, ReactNode, useReducer, Dispatch } from 'react';
import { CounterReducer, State, Action } from './CounterReducer';

type ContextProps = {
  children: ReactNode;
};

const initialState = {
  result: 0,
};

export const Context = createContext<State>(initialState);
export const DispatchContext = createContext<Dispatch<Action>>(() => {});
export const CounterContext = ({ children }: ContextProps) => {
  const [rstate, dispatch] = useReducer(CounterReducer, initialState);

  return (
    <Context.Provider value={rstate}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </Context.Provider>
  );
};

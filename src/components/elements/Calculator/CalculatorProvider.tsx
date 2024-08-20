import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { CalculatorReducer } from './CalculatorReducer';
import { Action } from '../Counter/CounterReducer';

const initialState = {
  result: 0,
  a: 0,
  b: 0,
  selector: '+',
};

const CalculatorContext = createContext(initialState);
const CalculatorDispatchContext = createContext<Dispatch<Action>>(() => {});

type ClculatorProviderProps = {
  children: ReactNode;
};

const CalculatorProvider = ({ children }: ClculatorProviderProps) => {
  const [rstate, dispatch] = useReducer(CalculatorReducer, initialState);
  return (
    <CalculatorContext.Provider value={rstate}>
      <CalculatorDispatchContext.Provider value={dispatch}>
        {children}
      </CalculatorDispatchContext.Provider>
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext, CalculatorDispatchContext, CalculatorProvider };

import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { CalculatorReducer, ReducerProps } from './CalculatorReducer';

export type RState = {
  result: number;
  a: number;
  b: number;
  selector: string;
  type: string;
};

const initialState: RState = {
  result: 0,
  a: 0,
  b: 0,
  selector: '+',
  type: 'change',
};

const CalculatorContext = createContext(initialState);
const CalculatorDispatchContext = createContext<Dispatch<ReducerProps>>(() => {});

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

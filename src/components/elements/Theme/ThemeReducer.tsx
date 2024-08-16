import { useReducer } from 'react';
type color = 'light' | 'dark' | 'red';
type Rstate = {
  currentColor: color;
};

type Action = {
  theme: color;
};

const reducer = (rstate: Rstate, { theme }: Action) => {
  return { ...rstate, currentColor: theme };
};

export const useThemeReducer = () => {
  const initaialState: Rstate = {
    currentColor: 'light',
  };
  const [rstate, dispatch] = useReducer(reducer, initaialState);

  return { rstate, dispatch };
};

export const defaultThemeReducer: ReturnType<typeof useThemeReducer> = {
  rstate: {
    currentColor: 'light',
  },
  dispatch: ({ theme }: Action) => {},
};

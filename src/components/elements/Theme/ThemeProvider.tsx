'use client';

import { createContext, useContext } from 'react';
import { defaultThemeReducer, useThemeReducer } from './ThemeReducer';

const { rstate, dispatch } = defaultThemeReducer;
const ThemeContext = createContext(rstate);
const ThemeDispatchContext = createContext(dispatch);

type Props = {
  children: JSX.Element[];
};

export const ThemeProvider = ({ children }: Props) => {
  const { rstate, dispatch } = useThemeReducer();
  return (
    <ThemeContext.Provider value={rstate}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

/**
 * 更新関数を登録しているコンテキストを返す関数
 *
 * @returns ThemeContext
 * @returns ThemeDispatchContext
 */
export const useTheme = () => useContext(ThemeContext);
export const useDispatchTeme = () => useContext(ThemeDispatchContext);

'use client';

import { createContext, ReactNode, useContext, useReducer } from 'react';
import { MemoReducer } from '../context/MemoReducer';

type Props = {
  children: ReactNode;
};

type StateObject = { id: number; title: string };
export type State = StateObject[];
const initialState = [
  { id: 1, title: '店を予約する' },
  { id: 2, title: '卵を買う' },
  { id: 3, title: '勉強する' },
];
export const MemoContext = createContext(initialState);
export const MemoDispatchContext = createContext(() => {});

export const MemoProvider = ({ children }: Props) => {
  const [rstate, dispatch] = useReducer(MemoReducer, initialState);
  return (
    <MemoContext.Provider value={rstate}>
      <MemoDispatchContext.Provider value={dispatch}>{children}</MemoDispatchContext.Provider>
    </MemoContext.Provider>
  );
};

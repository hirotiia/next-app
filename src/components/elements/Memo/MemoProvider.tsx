'use client';

import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { MemoReducer } from './MemoReducer';

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
const MemoContext = createContext<State>(initialState);
const MemoDispatchContext = createContext<Dispatch<State>>(() => {});

export const GetState = (): State => {
  return useContext(MemoContext);
};
export const GetDispatch = () => {
  return useContext(MemoDispatchContext);
};
export const MemoProvider = ({ children }: Props) => {
  const [rstate, dispatch] = useReducer(MemoReducer, initialState);
  return (
    <MemoContext.Provider value={rstate}>
      <MemoDispatchContext.Provider value={dispatch}>{children}</MemoDispatchContext.Provider>
    </MemoContext.Provider>
  );
};

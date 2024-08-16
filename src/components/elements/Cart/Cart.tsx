'use client';

import { useState, createContext, Dispatch, SetStateAction } from 'react';
import { Sum } from './Sum';
import { Trigger } from './Trigger';

type MyContextType = [number, Dispatch<SetStateAction<number>>];
export const MyContext = createContext<MyContextType>([0, () => {}]);

/** カート内の商品のチェックボックスと合計金額を表示するコンポーネント */
export const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={[count, setCount]}>
      <Sum />
      <Trigger />
    </MyContext.Provider>
  );
};

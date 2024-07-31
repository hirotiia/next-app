'use client';

import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';
import { ChangeEvent, useState } from 'react';

type CartObj = {
  item: string;
  count: number;
};

export default function Home() {
  const cartObj: CartObj = {
    item: 'apple',
    count: 10,
  };
  const [cart, setCart] = useState(cartObj);
  const setItem = (e: ChangeEvent<HTMLInputElement>) => {
    setCart((cart) => ({ ...cart, item: e.target.value }));
  };

  const increment = () => {
    setCart((cart) => ({ ...cart, count: cart.count + 1 }));
  };

  const decrement = () => {
    setCart((cart) => ({ ...cart, count: cart.count - 1 }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'トップページ'} />

      <p>item: {cart.item}</p>
      <p>count: {cart.count}</p>
      <input type="text" value={cart.item} onChange={setItem} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </main>
  );
}

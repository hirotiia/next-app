'use client';

import { HeadingLv1 } from '@/components/elements/Heading/HeadingLv1';
import { ChangeEvent, useReducer } from 'react';

type Status = {
  a: number;
  b: number;
  result: number;
  value: string;
  type: string;
};

type Action = {
  type: 'change' | 'add' | 'minus' | 'multiply' | 'divide';
  payload: {
    name: string;
    value: number;
  };
};

const reducer = (rstate: Status, { type, payload }: Action) => {
  switch (type) {
    case 'change':
      return { ...rstate, [payload.name]: payload.value };

    case 'add':
      return { ...rstate, result: rstate.a + rstate.b };

    case 'minus':
      return { ...rstate, result: rstate.a - rstate.b };

    case 'multiply':
      return { ...rstate, result: rstate.a * rstate.b };

    case 'divide':
      return { ...rstate, result: rstate.a / rstate.b };

    default:
      throw new Error('不明な値です。');
  }
};

export default function Home() {
  const initialState = {
    a: 0,
    b: 0,
    result: 0,
    value: 'change',
    type: 'default',
  };
  const CALC_OPTIONS = ['add', 'minus', 'multiply', 'divide'];
  const [rstate, dispatch] = useReducer(reducer, initialState);

  const calculate = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch({ type: value });
  };

  const numChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'change', payload: { name: e.target.name, value: Number(e.target.value) } });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingLv1 title={'トップページ'} />
      <label>
        a:
        <input type="number" name="a" value={rstate.a} onChange={numChangeHandler} />
      </label>
      <label>
        b:
        <input type="number" name="b" value={rstate.b} onChange={numChangeHandler} />
      </label>

      <label>
        計算方式を選択してください
        <select name="calculate" onChange={calculate}>
          {CALC_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <p>結果：{rstate.result}</p>
    </main>
  );
}

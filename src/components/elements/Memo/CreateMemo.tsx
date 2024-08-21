'use client';

import { ChangeEvent } from 'react';

export const CreateMemo = () => {
  const InputChangeMemoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <form onChange={}>
      <label>
        TODO
        <input type="text" name="todo作成" onChange={InputChangeMemoHandler} />
      </label>
      <button>追加</button>
    </form>
  );
};

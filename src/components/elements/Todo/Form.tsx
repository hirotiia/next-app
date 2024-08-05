'use client';

import { FormEvent, useState } from 'react';

type Todo = {
  id: number;
  content: string;
};

type AddTodo = {
  addTodo: (todo: Todo) => void;
};

export const Form = ({ addTodo }: AddTodo) => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const clickHandler = (e: FormEvent<HTMLFormElement>) => {
    // Form要素のデフォルトの挙動のリクエストを送って画面を更新する動作を打ち消すため
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };
    addTodo(newTodo);

    setEnteredTodo('');
  };
  return (
    <>
      <p>Form.tsx</p>
      <form className="border-black-300 border-2 border-solid" onSubmit={clickHandler}>
        <label>
          タスク名を入力してください
          <input
            type="text"
            name="todo"
            value={enteredTodo}
            onChange={(e) => setEnteredTodo(e.target.value)}
          />
        </label>
        <button>追加</button>
      </form>
    </>
  );
};

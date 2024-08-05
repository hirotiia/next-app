'use client';

import { useState } from 'react';
import { Form } from './Form';
import { List } from './List';

type TodoItem = {
  id: number;
  content: string;
};

type TodoItemList = {
  items: TodoItem[];
};

export const Todo = ({ items }: TodoItemList) => {
  const [todos, setTodo] = useState(items);
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };

  const addTodo = (todo: TodoItem) => {
    setTodo([...todos, todo]);
  };
  return (
    <>
      <p>Todo.tsx</p>
      <div className="border-black-300 border-2 border-solid">
        <h2 className="text-center text-5xl">Todo App</h2>
        <Form addTodo={addTodo} />
        <List items={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
};

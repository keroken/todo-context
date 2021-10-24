import React from 'react';
import todos from '../todo.json';
import { Todo } from './Todo';

type Props = {
  todos: {
    id: string;
    item: string;
    isDone: boolean;
  }[];
};

export const TodoList = ({todos}: Props) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id}>{todo.item}</Todo>
      ))}
    </ul>
  );
};
import React from 'react';
import { Todo } from './Todo';
import { todoType } from '../App';

export type Props = {
  todos: todoType;
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
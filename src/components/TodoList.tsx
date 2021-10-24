import React from 'react';
import todos from '../todo.json';
import { Todo } from './Todo';

export const TodoList = () => {
  console.log(todos);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id}>{todo.item}</Todo>
      ))}
    </ul>
  );
};
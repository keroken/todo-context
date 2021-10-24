import React, { useContext } from 'react';
import { Todo } from './Todo';
import { todoType } from '../App';
import { TodoContext } from '../App';

export type Props = {
  todos: todoType;
};

export const TodoList = () => {
  const todos = useContext(TodoContext);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id}>{todo.item}</Todo>
      ))}
    </ul>
  );
};
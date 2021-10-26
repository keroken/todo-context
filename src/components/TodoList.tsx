import React, { useContext } from 'react';
import { Todo } from './Todo';
import { todoType } from '../state/TodoProvider';
import { TodoContext } from '../state/TodoProvider';

export type Props = {
  todos: todoType;
};

export const TodoList = () => {
  const {todos} = useContext(TodoContext);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id}>{todo.item}</Todo>
      ))}
    </ul>
  );
};
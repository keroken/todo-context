import React from 'react';
import { useTodos } from '../state/TodoProvider';

export const DeleteButton = () => {
  const { onDeleteTodo } = useTodos();
  return (
    <button onClick={() => onDeleteTodo()}>Delete completed</button>
  );
};
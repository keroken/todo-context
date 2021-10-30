import React from 'react';
import { useTodos } from '../state/TodoProvider';

type Props = {
  id: string;
  checked: boolean;
};

export const Checkbox = ({id, checked}: Props) => {
  const {onCheckTodo} = useTodos();

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onCheckTodo(id)}
      />
    </>
  );
};
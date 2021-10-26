import React from 'react';
import { useTodos } from '../state/TodoProvider';
import { useInput } from '../hooks/useInput';

export const TodoForm = () => {
  const { onNewTodo } = useTodos();
  const [valueProps, resetValue] = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewTodo(valueProps.value);
    resetValue();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        {...valueProps}
      />
      <button>Submit</button>
    </form>
  );
};
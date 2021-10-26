import React, { useState } from 'react';
import { useTodos } from '../state/TodoProvider';

export const TodoForm = () => {
  const { onNewTodo } = useTodos();
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e)}
      />
      <button>Submit</button>
    </form>
  );
};
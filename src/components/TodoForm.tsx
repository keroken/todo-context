import React, { useState } from 'react';

type Props = {
  onNewTodo: (value: string) => void;
};

export const TodoForm = ({onNewTodo}: Props) => {
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
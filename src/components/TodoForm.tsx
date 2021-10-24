import React, { useState } from 'react';

export const TodoForm = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
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
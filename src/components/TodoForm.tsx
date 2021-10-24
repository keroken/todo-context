import React from 'react';

export const TodoForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};
import React from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

function App() {
  
  return (
    <>
      <h3>Todo Context</h3>
      <TodoList />
      <TodoForm />
    </>
  );
}

export default App;

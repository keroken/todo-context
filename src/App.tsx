import React from 'react';
import TodoProvider from './state/TodoProvider';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { DeleteButton } from './components/DeleteButton';

function App() {
  return (
    <TodoProvider>
      <h3>Todo Context</h3>
      <TodoList />
      <TodoForm />
      <DeleteButton />
    </TodoProvider>
  );
}

export default App;

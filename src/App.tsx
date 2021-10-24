import React, { useState } from 'react';
import initialTodos from './todo.json';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { v4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const onNewTodo = (value: string) => {
    const newTodos = [
      ...todos,
      {
        id: v4(),
        item: value,
        isDone: false
      }
    ];
    setTodos(newTodos);
  };
  return (
    <>
      <h3>Todo Context</h3>
      <TodoList todos={todos} />
      <TodoForm onNewTodo={onNewTodo} />
    </>
  );
}

export default App;

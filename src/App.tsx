import React, { createContext, useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { v4 } from 'uuid';

export type todoType = {
  id: string;
  item: string;
  isDone: boolean;
}[];

export type todoState = {
  todos: todoType;
  onNewTodo: (value: string) => void;
};

export const TodoContext = createContext<todoState>(
  { todos: [], onNewTodo: () => [] }
);

function App() {
  const [todos, setTodos] = useState<todoType>([]);
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
    <TodoContext.Provider value={{ todos, onNewTodo }}>
      <h3>Todo Context</h3>
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  );
}

export default App;

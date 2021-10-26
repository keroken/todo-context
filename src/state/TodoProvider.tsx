import React, { createContext, useState } from 'react';
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

type Props = {
  children: React.ReactNode;
};

function TodoProvider({ children }: Props) {
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
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

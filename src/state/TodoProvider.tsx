import React, { createContext, useState, useContext } from 'react';
import { v4 } from 'uuid';

type todoType = {
  id: string;
  item: string;
  isDone: boolean;
}[];

type todoState = {
  todos: todoType;
  onNewTodo: (value: string) => void;
  onChecked: (id: string) => void;
};

const TodoContext = createContext<todoState>(
  { todos: [], onNewTodo: () => [], onChecked: () => [] }
);

export const useTodos = () => useContext(TodoContext);

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
  const onChecked = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, onNewTodo, onChecked }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

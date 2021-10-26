import { Todo } from './Todo';
import { useTodos } from '../state/TodoProvider';

export const TodoList = () => {
  const {todos} = useTodos();
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id}>{todo.item}</Todo>
      ))}
    </ul>
  );
};
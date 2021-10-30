import { Todo } from './Todo';
import { Checkbox } from './Checkbox';
import { useTodos } from '../state/TodoProvider';

export const TodoList = () => {
  const {todos} = useTodos();
  return (
    <ul className="list">
      {todos.map(todo => (
        <div className="item-line">
          <Checkbox />
          <Todo key={todo.id}>{todo.item}</Todo>
        </div>
      ))}
    </ul>
  );
};
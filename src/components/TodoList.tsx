import { Todo } from './Todo';
import { Checkbox } from './Checkbox';
import { useTodos } from '../state/TodoProvider';

export const TodoList = () => {
  const {todos} = useTodos();
  return (
    <ul className="list">
      {todos.map((todo, index) => (
        <div key={index} className="item-line">
          <Checkbox id={todo.id} checked={todo.isDone} />
          <Todo key={todo.id}>{todo.item}</Todo>
        </div>
      ))}
    </ul>
  );
};
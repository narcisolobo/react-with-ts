import { ChangeEvent } from 'react';
import Todo from '../models/todo';
import { BsTrash } from 'react-icons/bs';

type Props = {
  todo: Todo;
  toggleTodo: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  deleteTodo: (id: string) => void;
};

function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          id="isComplete"
          type="checkbox"
          className="form-check-input"
          checked={todo.isComplete}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            toggleTodo(e, todo.id)
          }
        />
        <label
          className={`form-check-label ${
            todo.isComplete ? 'text-decoration-line-through' : ''
          }`}
          htmlFor="isComplete">
          {todo.task}
        </label>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteTodo(todo.id)}>
        <BsTrash />
      </button>
    </li>
  );
}

export default TodoItem;

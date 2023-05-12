import Todo from '../models/todo';
import { BsTrash } from 'react-icons/bs';
import useTodos from '../hooks/useTodos';
import { ChangeEvent } from 'react';

type Props = {
  todo: Todo;
};

function TodoItem({ todo }: Props) {
  const { dispatch } = useTodos();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          id="isComplete"
          type="checkbox"
          className="form-check-input"
          checked={todo.isComplete}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: 'TOGGLE_TODO',
              payload: { event: e, targetId: todo.id },
            })
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
        onClick={() =>
          dispatch({ type: 'DELETE_TODO', payload: { targetId: todo.id } })
        }>
        <BsTrash />
      </button>
    </li>
  );
}

export default TodoItem;

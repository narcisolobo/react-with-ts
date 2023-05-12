import { ChangeEvent } from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  toggleTodo: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  deleteTodo: (id: string) => void;
};

function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <ul className="list-group shadow mt-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

function TodoList() {
  const { todos } = useTodos();
  return (
    <ul className="list-group shadow mt-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

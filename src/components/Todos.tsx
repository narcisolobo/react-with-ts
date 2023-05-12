import { ChangeEvent, Fragment, useState } from 'react';
import TodoList from './TodoList';
import Todo from '../models/todo';
import TodoForm from './TodoForm';

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = (e: ChangeEvent<HTMLInputElement>, targetId: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        todo.isComplete = e.currentTarget.checked;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (targetId: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(updatedTodos);
  };

  const addTodo = (task: string) => {
    const newTodo = new Todo(task, false);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <Fragment>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </Fragment>
  );
}

export default Todos;

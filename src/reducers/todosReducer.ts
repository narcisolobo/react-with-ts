import { ChangeEvent } from 'react';
import Todo from '../models/todo';

const initialTodos: Todo[] = [];

type ActionType =
  | { type: 'ADD_TODO'; payload: { task: string } }
  | {
      type: 'TOGGLE_TODO';
      payload: { event: ChangeEvent<HTMLInputElement>; targetId: string };
    }
  | { type: 'DELETE_TODO'; payload: { targetId: string } };

const todosReducer = (todos: Todo[], action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      const newTodo = new Todo(payload.task, false);
      return [...todos, newTodo];

    case 'TOGGLE_TODO':
      const updatedTodos = todos.map((todo) => {
        if (todo.id === payload.targetId) {
          todo.isComplete = payload.event.target.checked;
        }
        return todo;
      });
      return updatedTodos;

    case 'DELETE_TODO':
      const filteredTodos = todos.filter(
        (todo) => todo.id !== payload.targetId
      );
      return filteredTodos;

    default:
      console.error(`Unexpected action type`);
      return todos;
  }
};

export type { ActionType };
export { initialTodos, todosReducer };

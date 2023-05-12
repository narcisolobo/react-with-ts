import Todo from '../models/todo';

const initialTodos: Todo[] = [];

type ActionType =
  | { type: 'ADD_TODO'; task: string }
  | { type: 'TOGGLE_TODO'; targetId: string }
  | { type: 'DELETE_TODO'; targetId: string };

const todosReducer = (todos: Todo[], action: ActionType) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = new Todo(action.task, false);
      return [...todos, newTodo];
    case 'TOGGLE_TODO':
      const updatedTodos = todos.map((todo) => {
        if (todo.id === action.targetId) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      return updatedTodos;
    case 'DELETE_TODO':
      const filteredTodos = todos.filter((todo) => todo.id !== action.targetId);
      return filteredTodos;
    default:
      console.error(`Unexpected action type`);
      return todos;
  }
};

export type { ActionType };
export { initialTodos, todosReducer };

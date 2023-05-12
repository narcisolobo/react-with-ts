import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import Todo from '../models/todo';
import {
  ActionType,
  initialTodos,
  todosReducer,
} from '../reducers/todosReducer';

const TodosContext = createContext<{
  todos: Todo[];
  dispatch: Dispatch<ActionType>;
}>({
  todos: initialTodos,
  dispatch: () => {},
});

function TodosProvider({ children }: PropsWithChildren) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };

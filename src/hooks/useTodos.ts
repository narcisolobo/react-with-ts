import { Dispatch, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Todo from '../models/todo';
import { ActionType } from '../reducers/todosReducer';

function useTodos(): { todos: Todo[]; dispatch: Dispatch<ActionType> } {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('useTodos must be used in TodosProvider.');
  }

  const { todos, dispatch } = context;
  return { todos, dispatch };
}

export default useTodos;

import 'bootstrap/dist/css/bootstrap.min.css';
import { TodosProvider } from './context/TodosContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;

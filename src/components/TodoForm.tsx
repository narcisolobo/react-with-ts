import { FormEvent, useRef } from 'react';

type Props = {
  addTodo: (task: string) => void;
};

function TodoForm({ addTodo }: Props) {
  const taskRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const task = taskRef.current!.value;
    if (task.trim().length === 0) {
      return;
    }

    addTodo(task);
    taskRef.current!.value = '';
  };

  return (
    <div className="card shadow mt-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Todo:
            </label>
            <input
              type="text"
              name="task"
              id="task"
              className="form-control"
              ref={taskRef}
            />
          </div>
          <div className="text-end">
            <button className="btn btn-sm btn-primary">Add Todo</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;

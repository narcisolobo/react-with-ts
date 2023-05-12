class Todo {
  id: string;
  task: string;
  isComplete: boolean;

  constructor(task: string, isComplete: boolean) {
    this.id = crypto.randomUUID();
    this.task = task;
    this.isComplete = isComplete;
  }
}

export default Todo;

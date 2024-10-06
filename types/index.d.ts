export type Task = { id: string; title: string; isDone: boolean };

export type TaskList = {
  id: string;
  title: string;
  tasks: Task[];
};

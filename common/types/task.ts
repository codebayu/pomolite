export interface ITask {
  id: number;
  title: string;
  content: string | null;
  userId: string;
  createdAt: Date;
  isDone: boolean;
}

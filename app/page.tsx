import { ITask } from '@/common/types/task';
import axios, { AxiosResponse } from 'axios';

export default async function Home() {
  const { data: tasks } = await getTask();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World!</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.content}</p>
        </div>
      ))}
    </main>
  );
}

// Server Fetching
async function getTask(): Promise<{ status: number; data: ITask[] }> {
  const response: AxiosResponse = await axios.get(
    `${process.env.BASE_URL}/api/tasks`
  );
  return {
    status: response.status,
    data: response.data.data,
  };
}

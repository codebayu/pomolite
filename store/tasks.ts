import { ITask } from '@/common/types/task';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface InitialAuthState {
  localTask: ITask[];
  addNewTask(task: ITask): void;
  updateTask(id: number, updatedTask: ITask): void;
  deleteTask(id: number): void;
  //   setLocalTasks(tasks: ITask[]): void;
}

export const useTasks = create<InitialAuthState>()(
  devtools(
    persist(
      (set) => ({
        localTask: [] as ITask[],
        addNewTask: (newTask: ITask) =>
          set((state) => ({
            ...state,
            localTask: [newTask, ...state.localTask],
          })),
        // setLocalTasks: (newTask: ITask[]) => set({ localTask: newTask }),
        updateTask: (id: number, updatedTask: ITask) =>
          set((state) => ({
            ...state,
            localTask: state.localTask.map((task) => {
              console.log(updatedTask);
              return task.id === id ? { ...task, ...updatedTask } : task;
            }),
          })),
        deleteTask: (id: number) =>
          set((state) => ({
            ...state,
            localTask: state.localTask.filter((task) => task.id !== id),
          })),
      }),
      {
        name: 'task-store',
      }
    )
  )
);

import { ITask } from '@/common/types/task';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface InitialAuthState {
  localTask: ITask[];
  activeTask: number | null;
  addNewTask(task: ITask): void;
  updateTask(id: number, updatedTask: ITask): void;
  deleteTask(id: number): void;
  setActiveTask(id: number): void;
  setTaskDone(id: number): void;
}

export const useTasks = create<InitialAuthState>()(
  devtools(
    persist(
      (set) => ({
        localTask: [] as ITask[],
        activeTask: null,
        addNewTask: (newTask: ITask) =>
          set((state) => ({
            localTask: [newTask, ...state.localTask],
            activeTask:
              state.localTask.length > 0 ? state.activeTask : newTask.id,
          })),
        updateTask: (id: number, updatedTask: ITask) =>
          set((state) => ({
            localTask: state.localTask.map((task) => {
              return task.id === id ? { ...task, ...updatedTask } : task;
            }),
          })),
        deleteTask: (id: number) =>
          set((state) => ({
            localTask: state.localTask.filter((task) => task.id !== id),
          })),
        setActiveTask: (id: number) => set(() => ({ activeTask: id })),
        setTaskDone: (id: number) =>
          set((state) => ({
            localTask: state.localTask.map((task) =>
              task.id === id ? { ...task, isDone: true } : task
            ),
          })),
      }),
      {
        name: 'task-store',
      }
    )
  )
);

import { ITask } from '@/common/types/task';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface InitialAuthState {
  localTask: ITask[];
  activeTask: number | null;
  willActiveTask: number | null;
  addNewTask(task: ITask): void;
  updateTask(id: number, updatedTask: ITask): void;
  deleteTask(id: number): void;
  setActiveTask(id: number): void;
  setWillActiveTask(id: number): void;
  setTaskDone(id: number): void;
  setIncrementPomos(id: number): void;
}

export const useTasks = create<InitialAuthState>()(
  devtools(
    persist(
      (set) => ({
        localTask: [] as ITask[],
        activeTask: null,
        willActiveTask: null,
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
        setWillActiveTask: (id: number) => set(() => ({ willActiveTask: id })),
        setTaskDone: (id: number) =>
          set((state) => ({
            localTask: state.localTask.map((task) =>
              task.id === id ? { ...task, isDone: !task.isDone } : task
            ),
          })),
        setIncrementPomos: (id: number) =>
          set((state) => ({
            localTask: state.localTask.map((task) =>
              task.id === id
                ? { ...task, totalPomos: task.totalPomos + 1 }
                : task
            ),
          })),
      }),
      {
        name: 'task-store',
      }
    )
  )
);

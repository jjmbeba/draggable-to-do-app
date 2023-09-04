import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface Store {
  todos: {
    id: string;
    content: string;
    status: boolean;
  }[];
  activeSelection: 'All' | 'Active' | 'Completed';
  setActiveSelection: (activeSelection:'All' | 'Active' | 'Completed') => void;
  addTodo: (todo: string) => void;
  toggleDone: (id: string) => void;
  deleteTodo: (id: string) => void;
  deleteCompletedTodos: () => void;
  setTodos: (
    reorderedTodos: {
      id: string;
      content: string;
      status: boolean;
    }[]
  ) => void;
}

export const useStore = create<Store>()((set) => ({
  activeSelection:'All',
  setActiveSelection:(activeSelection) => {
    set((state) => ({
      activeSelection
    }))
  },
  todos: [
    {
      id: "413cffb3-a5e9-4306-8f33-72b18785c192",
      content: "Complete online JavaScript course",
      status: true,
    },
    {
      id: "aeee629a-a869-4dbb-b5f7-8230d867dd44",
      content: "Jog around the park 3x",
      status: false,
    },
    {
      id: "81918195-4007-4a25-be2c-79faaf06a2e0",
      content: "10 minutes meditation",
      status: false,
    },
    {
      id: "187012d9-1826-4eb6-9391-a5603a4f3f5c",
      content: "Read for 1 hour",
      status: false,
    },
    {
      id: "f83cd211-88dd-4cfe-993e-80400f66aae2",
      content: "Pick up groceries",
      status: false,
    },
    {
      id: "e01ec69e-bf7d-408b-852d-3a24a66937d3",
      content: "Complete Todo App on Frontend Mentor",
      status: false,
    },
  ],
  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: uuidv4(),
          content: todo,
          status: false,
        },
      ],
    })),
  toggleDone: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  deleteCompletedTodos: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.status),
    })),
  setTodos: (reorderedTodos) => set({ todos: reorderedTodos }),
}));

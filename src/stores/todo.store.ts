import { defineStore } from "pinia";

import httpTodoService from "../services/http-todo.service";

import { TodoDto } from "../shared/dto/todo.dto";
import { TodoStatusEnum } from "../shared/dto/todo-status.enum";

export type RootState = {
  todos: TodoDto[];
};

export const useTodoStore = defineStore({
  id: "todoStore",
  state: () =>
    ({
      todos: [],
    } as RootState),

  actions: {
    async fetchTodos() {
      this.todos = await httpTodoService.getAllTodos();
    },

    createTodo(todo: TodoDto) {
      if (!todo) return;

      this.todos.push(todo);
    },

    getAllTodos() {
      return this.todos;
    },

    updateTodoStatus(id: string, status: TodoStatusEnum) {
      if (!id || !status) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.todos[index].status = status;
      }
    },

    deleteTodo(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.todos.splice(index, 1);
    },

    findIndexById(id: string) {
      return this.todos.findIndex((todo) => todo.id === id);
    },
  },
});

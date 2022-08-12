import { CreateTodoDto } from "../shared/dto/create-todo.dto";
import { TodoStatusEnum } from "../shared/dto/todo-status.enum";
import { TodoDto } from "../shared/dto/todo.dto";

const todoUrl = import.meta.env.VITE_BACKEND_URL + "/todo";
const defaultHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export default {
  createTodo(dto: CreateTodoDto) {
    return fetch(todoUrl, {
      mode: "cors",
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(dto),
    }).then((response) => response.json());
  },

  getAllTodos(): Promise<TodoDto[]> {
    return fetch(todoUrl, {
      method: "GET",
      headers: defaultHeaders,
    }).then((response) => response.json());
  },

  patchStatusById(todoId: string, status: TodoStatusEnum) {
    return fetch(todoUrl + `/${todoId}`, {
      method: "PATCH",
      headers: defaultHeaders,
      body: JSON.stringify({ status }),
    }).then((response) => response.json());
  },

  deleteTodoById(todoId: string) {
    return fetch(todoUrl + `/${todoId}`, {
      method: "DELETE",
      headers: defaultHeaders,
    });
  },
};

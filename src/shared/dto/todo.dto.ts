import { TodoStatusEnum } from "./todo-status.enum";

export interface TodoDto {
  readonly id: string;
  status: TodoStatusEnum;
  readonly title: string;
}

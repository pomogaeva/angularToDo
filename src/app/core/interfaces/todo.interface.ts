export interface Todo {
  get(arg0: string): any;
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  priority: string;
}
export interface Todo {
  id: string;
  title: string;
  status: "TODO" | "IN_PROGRESS" | "COMPLETE";
}

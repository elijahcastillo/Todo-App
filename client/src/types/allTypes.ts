interface ITaskItem {
  id: number;
  name: string;
  date: string;
  compleated: number;
}

export enum ItemFilter {
  ALL,
  COMPLEATED,
  TODO,
}

export type { ITaskItem };

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

export enum ItemDateSort {
  ASCENDING,
  DESCENDING,
}

export type { ITaskItem };

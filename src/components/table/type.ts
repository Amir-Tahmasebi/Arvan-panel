/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableColumn<T> = {
    key: keyof T | string;
    header: string;
    render?: (row: T) => React.ReactNode;
};

export type TableProps<T> = {
   data: T[];
  columns: TableColumn<T>[];
  pageCount?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  renderActions?: (row: T, index: number) => React.ReactNode;
};

export interface ActionsProps<T> {
    isOpen: boolean;
    onToggle: () => void;
    row: T | any
};
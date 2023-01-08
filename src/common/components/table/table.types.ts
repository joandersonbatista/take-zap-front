import type { ColumnDef } from '@tanstack/react-table';

export type Column<T> = Array<ColumnDef<T>>;

export interface Props {
  columns: Array<ColumnDef<any>>;
  data: any[];
  onSelectRows: (data: any[]) => void;
  onDeleteData?: (data: any) => void;
  onPressRow?: (data: any) => void;
}

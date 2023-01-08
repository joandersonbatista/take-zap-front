import { ReactElement, useMemo, useEffect, FunctionComponent } from 'react';
import { withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import { SelectOption } from '@/common/components/select/select.types';
import { IndeterminateCheckbox } from '@/common/components/table/indeterminate-checkbox/indeterminate-checkbox';

import type { ColumnDef } from '@tanstack/react-table';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
} from '@tanstack/react-table';

import * as Style from './table.styles';
import type { Props } from './table.types';

const BaseTable: FunctionComponent<Props> = ({
  columns,
  data,
  onSelectRows,
  onDeleteData,
  onPressRow,
}) => {
  const INITIAL_PAGE_SIZE = 20;

  const newColumns: Array<ColumnDef<any>> = [
    {
      id: 'select',
      header: ({ table }) => (
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      ),
    },
    ...columns,
    {
      id: 'actions',
      header: translate('common.table.headers.actions'),
      cell: ({ row }) => <RenderActions data={row.original} />,
    },
  ];

  const rowsPerPages: SelectOption[] = [
    { label: '20', value: '20' },
    { label: '30', value: '30' },
    { label: '40', value: '40' },
    { label: '50', value: '50' },
  ];

  const newData = useMemo<any[]>(() => data, []);

  const table = useReactTable({
    data: newData,
    columns: newColumns,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  function RenderActions({ data }: any): ReactElement {
    return (
      <Style.ActionsContent>
        <Style.DeleteDataButton
          onClick={() => {
            onDeleteData?.(data);
          }}
        >
          <Style.TrashIcon />
        </Style.DeleteDataButton>
        <Style.SettinsIconContent onClick={() => onPressRow?.(data)}>
          <Style.SettingsIcon />
        </Style.SettinsIconContent>
      </Style.ActionsContent>
    );
  }

  function renderHead(): ReactElement {
    return (
      <Style.Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Style.Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Style.Th
                key={header.id}
                $isShortHeader={['actions', 'select'].includes(header.id)}
              >
                <Style.ThContent
                  $withoutBorder={['actions', 'select'].includes(header.id)}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Style.ThContent>
              </Style.Th>
            ))}
          </Style.Tr>
        ))}
      </Style.Thead>
    );
  }

  function renderBody(): ReactElement {
    return (
      <Style.Tbody>
        {table.getRowModel().rows.map((row) => (
          <Style.Tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Style.Td
                key={cell.id}
                $isShortRow={['actions', 'select'].includes(cell.column.id)}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Style.Td>
            ))}
          </Style.Tr>
        ))}
      </Style.Tbody>
    );
  }

  function renderFoot(): ReactElement {
    return (
      <Style.Tfoot>
        <Style.Tr>
          <Style.TdFoot>
            <Style.RowsPerPage>
              {translate('common.table.rowsPerPage')}
            </Style.RowsPerPage>
            <Style.SelectRowsPerPage
              selectOptions={rowsPerPages}
              selectedValue={table.getState().pagination.pageSize.toString()}
              onChangeValue={(value) => {
                table.setPageSize(Number(value));
              }}
              openOnTop
            />
            <Style.RowsPerPageInfo>
              {translate('common.table.of', {
                pageIndex: table.getState().pagination.pageIndex + 1,
                pageCount: table.getPageCount(),
              })}
            </Style.RowsPerPageInfo>
            <Style.NextPage
              disabled={!table.getCanPreviousPage()}
              onClick={() => {
                table.previousPage();
              }}
            >
              <Style.ChevronTable $disabled={!table.getCanPreviousPage()} />
            </Style.NextPage>
            <Style.NextPage
              disabled={!table.getCanNextPage()}
              onClick={() => {
                table.nextPage();
              }}
            >
              <Style.ChevronTable $rotate $disabled={!table.getCanNextPage()} />
            </Style.NextPage>
          </Style.TdFoot>
        </Style.Tr>
      </Style.Tfoot>
    );
  }

  useEffect(() => {
    table.setPageSize(INITIAL_PAGE_SIZE);
  }, []);

  useEffect(() => {
    const data = table.getSelectedRowModel().flatRows.map((v) => v.original);

    onSelectRows(data);
  }, [table.getSelectedRowModel().flatRows]);

  return (
    <Style.Container>
      <Style.Table>
        {renderHead()}
        {renderBody()}
        {renderFoot()}
      </Style.Table>
    </Style.Container>
  );
};

export const Table = withTranslation()(BaseTable);

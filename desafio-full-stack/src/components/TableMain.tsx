import type { ReactElement } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  render?: (column: ColumnProps<T>, item: T, index?: number) => ReactElement;
}

type Props<T> = {
  columns: Array<ColumnProps<T>>;
  data?: T[];
};

const TableMain = <T,>({ data, columns }: Props<T>) => {
  const headers = columns.map((column, index) => (
    <th
      key={`headCell-${index}`}
      className="px-4 py-3 text-center border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700"
    >
      <div className="flex items-center justify-center gap-2">
        {column.title}
        {column.title !== "Ações" && <AiOutlineArrowDown className="w-4 h-4" />}
      </div>
    </th>
  ));

  const rows = !data?.length ? (
    <tr>
      <td
        className="text-center py-4 text-sm text-gray-500"
        colSpan={columns.length}
      >
        Nenhum dado
      </td>
    </tr>
  ) : (
    data.map((row, index) => (
      <tr key={`row-${index}`} className="hover:bg-gray-50 transition">
        {columns.map((column, index2) => {
          const value = column.render
            ? column.render(column, row as T)
            : (row[column.key as keyof typeof row] as string);

          return (
            <td
              key={`cell-${index2}`}
              className="px-4 py-2 text-sm text-gray-600 text-center"
            >
              {value}
            </td>
          );
        })}
      </tr>
    ))
  );

  return (
    <div className="w-full mb-10 overflow-x-auto border border-gray-300 rounded-lg">
      <table className="min-w-full text-sm">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default TableMain;

import type { ReactElement } from 'react';

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
            className="px-4 py-3 text-center border-2 border-[#002D44] text-sm font-medium text-white bg-[#001622]"
        >
            <div className="flex items-center justify-center gap-2 text-white">
                {column.title}
            </div>
        </th>
    ));

    const rows = !data?.length ? (
        <tr>
            <td
                className="text-center py-4 text-sm text-white"
                colSpan={columns.length}
            >
                Nenhum dado
            </td>
        </tr>
    ) : (
        data.map((row, index) => (
            <tr key={`row-${index}`} className="hover:bg-[#002D44] transition">
                {columns.map((column, index2) => {
                    const value = column.render
                        ? column.render(column, row as T)
                        : (row[column.key as keyof typeof row] as string);

                    return (
                        <td
                            key={`cell-${index2}`}
                            className="px-4 py-2 text-sm text-white text-center border-2 border-[#002D44]"
                        >
                            {value}
                        </td>
                    );
                })}
            </tr>
        ))
    );

    return (
        <div className="w-full max-w-[1700px] mx-auto mt-5 p-10 overflow-x-auto border-2 rounded-[16px] border-[#002D44] bg-[#001622]">
            <table className="min-w-full text-sm text-white">
                <thead className="text-white">
                    <tr>{headers}</tr>
                </thead>
                <tbody className="text-white">{rows}</tbody>
            </table>
        </div>
    );
};

export default TableMain;

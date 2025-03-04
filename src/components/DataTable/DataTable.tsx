import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { CSSProperties } from "react";

interface DataTableProps<TData, TValue> {
    data: TData[];
    columns: ColumnDef<TData, TValue>[];
}

const DEFAULT_COLUMN_WIDTH = 150;

export default function DataTable<TData, TValue>({
    data,
    columns,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        getCoreRowModel: getCoreRowModel(),
        data,
        columns,
    });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => {
                    return (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                const styles: CSSProperties = header.getSize() !== DEFAULT_COLUMN_WIDTH
                                    ? { width: `${header.getSize()}px` }
                                    : {};

                                return (
                                    <TableHead key={header.id} style={styles}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableHeader>

            <TableBody>
                {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => {
                            return (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                ))}
            </TableBody>


            <TableFooter>
                {table.getFooterGroups().map((footerGroup) => {
                    return (
                        <TableRow key={footerGroup.id}>
                            {footerGroup.headers.map((footer) => {
                                return (
                                    <TableCell key={footer.id} colSpan={footer.colSpan}>
                                        {flexRender(footer.column.columnDef.footer, footer.getContext())}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableFooter>
        </Table>
    );
}

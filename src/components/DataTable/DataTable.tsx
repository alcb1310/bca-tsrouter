import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
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
import { useState, type CSSProperties } from "react";
import { Button } from "../ui/button";

interface DataTableProps<TData, TValue> {
    data: TData[];
    columns: ColumnDef<TData, TValue>[];
}

const DEFAULT_COLUMN_WIDTH = 150;

export default function DataTable<TData, TValue>({
    data,
    columns,
}: DataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 15,
    })

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            pagination
        }
    });

    return (
        <div>
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
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    Página {pagination.pageIndex + 1} de {table.getPageCount()}
                </p>
                <div className="flex items-center">
                    <Button
                        variant={'outline'}
                        onClick={() => setPagination((old) => ({ ...old, pageIndex: 0 }))}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </Button>
                    <Button
                        variant={'outline'}
                        onClick={() => setPagination((old) => ({ ...old, pageIndex: old.pageIndex - 1 }))}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </Button>
                    <Button
                        variant={'outline'}
                        onClick={() => setPagination((old) => ({ ...old, pageIndex: old.pageIndex + 1 }))}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </Button>
                    <Button
                        variant={'outline'}
                        onClick={() => setPagination((old) => ({ ...old, pageIndex: table.getPageCount() - 1 }))}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

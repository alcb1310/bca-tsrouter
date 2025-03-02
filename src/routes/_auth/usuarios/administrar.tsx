import PageTitle from "@/components/PageTitle";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/lib/api/users";
import type { UserResponse } from "@/types/users";
import { createFileRoute } from "@tanstack/react-router";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    type ColumnDef,
} from "@tanstack/react-table";

export const Route = createFileRoute("/_auth/usuarios/administrar")({
    component: RouteComponent,
    loader: async ({ context: { queryClient } }) => {
        return await queryClient.ensureQueryData({
            queryKey: ["users"],
            queryFn: getAllUsers,
        });
    },
});

function RouteComponent() {
    const users = Route.useLoaderData();
    const columns: ColumnDef<UserResponse>[] = [
        {
            accessorKey: "name",
            header: "Nombre",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
    ];

    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <PageTitle title="Administración de usuarios" />

            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}

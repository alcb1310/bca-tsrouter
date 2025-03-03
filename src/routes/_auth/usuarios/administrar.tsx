import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/spinner";

import CellActions from "@/components/DataTable/CellActions";
import DataTable from "@/components/DataTable/DataTable";
import PageTitle from "@/components/PageTitle";
import { getAllUsers } from "@/lib/api/users";
import type { UserResponse } from "@/types/users";
import DeleteUser from "@/components/users/DeleteUser";
import EditUser from "@/components/users/EditUser";

export const Route = createFileRoute("/_auth/usuarios/administrar")({
    component: RouteComponent,
});

function RouteComponent() {
    const { data: users, isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    });

    const columns: ColumnDef<UserResponse>[] = [
        {
            accessorKey: "name",
            header: "Nombre",
            // NOTE: At least one column have to have an auto size for this to work
            size: 200,
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            id: "actions",
            size: 50,
            cell: (params) => {
                return (
                    <CellActions
                        edit={<EditUser user={params.row.original} />}
                        del={<DeleteUser user={params.row.original} />}
                    />
                );
            },
        },
    ];

    return (
        <div className={`flex h-full w-full flex-col items-start`}>
            <PageTitle title="Administración de usuarios" />
            <Button variant="ghost" size="lg" className="text-primary text-base">
                <PlusIcon size={16} />
                Crear usuario
            </Button>
            {isFetching && <LoadingSpinner size={24} />}
            <Card className="w-1/2 flex flex-col grow">
                <CardContent>
                    <DataTable data={users || []} columns={columns} />
                </CardContent>
            </Card>
        </div>
    );
}

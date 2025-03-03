import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";
import { PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/spinner";

import CellActions from "@/components/DataTable/CellActions";
import DataTable from "@/components/DataTable/DataTable";
import PageTitle from "@/components/PageTitle";
import { deleteUser, getAllUsers } from "@/lib/api/users";
import type { UserResponse } from "@/types/users";

export const Route = createFileRoute("/_auth/usuarios/administrar")({
    component: RouteComponent,
});

function RouteComponent() {
    const queryClient = useQueryClient();
    const { data: users, isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    });

    const { mutate } = useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
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
                        edit=<Button
                            variant="ghost"
                            onClick={() => editFn(params.row.original.id)}
                            className="flex gap-2"
                        >
                            <PencilIcon size={10} />
                            Editar
                        </Button>
                        del={
                            <Button
                                variant="ghost"
                                onClick={() => deleteFun(params.row.original)}
                                className="flex gap-2 text-destructive"
                            >
                                <Trash2Icon size={10} className="text-destructive" />
                                Eliminar
                            </Button>
                        }
                    />
                );
            },
        },
    ];

    function deleteFun(user: UserResponse) {
        console.log("delete", user);
        mutate(user.id, {
            onSuccess: () => {
                console.log("deleted");
                toast.success("Usuario eliminado");
            },
        });
    }

    function editFn(userId: string) {
        console.log("edit", userId);
    }

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

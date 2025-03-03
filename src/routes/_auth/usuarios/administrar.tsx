import CellActions from "@/components/DataTable/CellActions";
import DataTable from "@/components/DataTable/DataTable";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllUsers } from "@/lib/api/users";
import type { UserResponse } from "@/types/users";
import { createFileRoute } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";
import { PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import type React from "react";
import { toast } from "sonner";

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
                        edit={<EditButton id={params.row.original.id} />}
                        del={<DeleteButton user={params.row.original} />}
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
            <Card className="w-1/2 flex flex-col grow">
                <CardContent>
                    <DataTable data={users} columns={columns} />
                </CardContent>
            </Card>
        </div>
    );
}

function EditButton({ id }: { id: string }) {
    function editFn(userId: string) {
        console.log("edit", userId);
    }
    return (
        <Button
            variant="ghost"
            onClick={() => editFn(id)}
            className="flex gap-2"
        >
            <PencilIcon size={10} />
            Editar
        </Button>
    );
}

function DeleteButton({ user }: { user: UserResponse }) {

    function deleteFn() {
        const message: React.ReactNode = <div>Desea elmiiar al usuario {user.name}</div>;
        const description: React.ReactNode = <div>Esta acción elimina al usuario de la base de datos y no se puede deshacer</div>;
        toast.error(message, {
            description,
            action: {
                label: "Eliminar",
                onClick: () => {
                    console.log("delete", user.id);
                },
            }
        })
    }
    return (
        <Button
            variant="ghost"
            onClick={() => deleteFn()}
            className="flex gap-2 text-destructive"
        >
            <Trash2Icon size={10} className="text-destructive" />
            Eliminar
        </Button>
    )
}

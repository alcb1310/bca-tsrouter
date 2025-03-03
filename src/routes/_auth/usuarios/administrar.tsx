import CellActions from "@/components/DataTable/CellActions";
import DataTable from "@/components/DataTable/DataTable";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllUsers } from "@/lib/api/users";
import type { UserResponse } from "@/types/users";
import { createFileRoute } from "@tanstack/react-router";
import { type ColumnDef } from "@tanstack/react-table";

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
            edit={
              <Button
                variant="ghost"
                onClick={() => editFn(params.row.original.id)}
              >
                Editar
              </Button>
            }
            del={
              <Button
                variant="ghost"
                className="text-destructive"
                onClick={() => deleteFn(params.row.original.id)}
              >
                Eliminar
              </Button>
            }
          />
        );
      },
    },
  ];

  function deleteFn(userId: string) {
    console.log("delete", userId);
  }

  function editFn(userId: string) {
    console.log("edit", userId);
  }

  return (
    <div className={`flex h-full w-full flex-col items-start`}>
      <PageTitle title="Administración de usuarios" />
      <Button variant="ghost" size="lg" className="text-primary text-base">
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

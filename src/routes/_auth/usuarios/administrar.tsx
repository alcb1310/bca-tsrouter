import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/spinner";

import DataTable from "@/components/DataTable/DataTable";
import PageTitle from "@/components/PageTitle";
import { getAllUsers } from "@/lib/api/users";
import useAllUsersColumns from "@/hooks/use-all-users-columns";

export const Route = createFileRoute("/_auth/usuarios/administrar")({
    component: RouteComponent,
});

function RouteComponent() {
    const { data: users, isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    });

    const columns = useMemo(() => useAllUsersColumns(), []);

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

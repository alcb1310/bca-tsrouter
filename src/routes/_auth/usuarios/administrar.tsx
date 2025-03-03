import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/spinner";

import DataTable from "@/components/DataTable/DataTable";
import PageTitle from "@/components/PageTitle";
import { getAllUsers } from "@/lib/api/users";
import useAllUsersColumns from "@/hooks/use-all-users-columns";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import type { UserResponse } from "@/types/users";
import UserForm from "@/components/users/UserForm";

export const Route = createFileRoute("/_auth/usuarios/administrar")({
    component: RouteComponent,
});

function RouteComponent() {
    const { data: users, isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
    });

    const [selectedUser, setSelectedUser] = useState<UserResponse | null>(null);
    const columns = useMemo(() => useAllUsersColumns(setSelectedUser), []);

    return (
        <Drawer direction="right" modal={true}>
            <div className={`flex gap-5 h-full w-full flex-col items-start`}>
                <PageTitle title="Administración de usuarios" />
                <DrawerTrigger onClick={() => setSelectedUser(null)}>
                    <div className="flex gap-2 text-primary hover:cursor-pointer">
                        <PlusIcon size={16} />
                        Crear usuario
                    </div>
                </DrawerTrigger>
                {isFetching && <LoadingSpinner size={24} />}
                <Card className="w-1/2 flex flex-col grow">
                    <CardContent>
                        <DataTable data={users || []} columns={columns} />
                    </CardContent>
                </Card>
            </div>

            <UserForm user={selectedUser} />
        </Drawer>
    );
}

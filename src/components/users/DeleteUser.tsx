import { deleteUser } from "@/lib/api/users";
import type { UserResponse } from "@/types/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";

export default function DeleteUser({ user }: { user: UserResponse }) {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (id: string) => deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    function deleteFun(user: UserResponse) {
        toast.error("¿Seguro que deseas eliminar el usuario?", {
            description:
                "El usuario será eliminado permanentemente y no se puede deshacer",
            className: "bg-destructive text-destructive-foreground",
            action: (
                !isPending &&
                <Button
                    className="bg-destructive-foreground text-destructive"
                    onClick={() => {
                        mutate(user.id);
                        toast.success("Usuario eliminado");
                    }}
                >
                    Eliminar
                </Button>
            ),
        });
    }

    return (
        <Button
            variant="ghost"
            onClick={() => deleteFun(user)}
            className="flex gap-2 text-destructive"
        >
            <Trash2Icon size={10} className="text-destructive" />
            Eliminar
        </Button>
    );
}

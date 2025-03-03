import type { UserResponse } from "@/types/users";
import { Button } from "../ui/button";
import {
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "../ui/drawer";

type UserFormProps = {
    user: UserResponse | null;
};

export default function UserForm({ user }: UserFormProps) {
    return (
        <DrawerContent>
            <DrawerTitle asChild>
                <DrawerHeader>
                    {user ? `Editar ${user.name}` : "Crear nuevo usuario"}
                </DrawerHeader>
            </DrawerTitle>
            <div aria-describedby="create-user-drawer">
                <p>Some other content</p>
            </div>

            <DrawerFooter>
                <div className="flex justify-around gap-2">
                    <Button>Guardar</Button>
                    <DrawerClose asChild>
                        <Button variant={"secondary"}>Cerrar</Button>
                    </DrawerClose>
                </div>
            </DrawerFooter>
        </DrawerContent>
    );
}

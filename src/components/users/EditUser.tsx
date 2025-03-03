import { PencilIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { UserResponse } from "@/types/users";

export default function EditUser({ user }: { user: UserResponse }) {
    function editFn(user: UserResponse) {
        console.log("edit", user.id);
    }

    return (
        <Button
            variant="ghost"
            onClick={() => editFn(user)}
            className="flex gap-2"
        >
            <PencilIcon size={10} />
            Editar
        </Button>
    )
}

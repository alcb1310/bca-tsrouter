import type { UserResponse } from "@/types/users";
import { Button } from "../ui/button";
import {
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "../ui/drawer";
import { useForm } from "@tanstack/react-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import FieldInfo from "../FieldInfo";

type UserFormProps = {
    user: UserResponse | null;
};

export default function UserForm({ user }: UserFormProps) {
    const isError = false;
    const { reset, handleSubmit, Field, Subscribe } = useForm({
        defaultValues: {
            email: user ? user.email : "",
            name: user ? user.name : "",
            password: ""
        },
        onSubmit: ({ value }) => {
            console.log(value)
            if (user) {
                // update user
                console.log("update user")
                reset();
                return
            }

            console.log("create user")
            reset();
        }
    })


    return (
        <DrawerContent>
            <DrawerTitle asChild>
                <DrawerHeader>
                    {user ? `Editar ${user.name}` : "Crear nuevo usuario"}
                </DrawerHeader>
            </DrawerTitle>
            <form onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSubmit();
            }}>
                <div className="p-5 flex flex-col gap-4">
                    <Field
                        name="email"
                        children={(field) => (
                            <div>
                                <Label htmlFor={field.name}>Email</Label>

                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="email"
                                    value={field.state.value}
                                    placeholder="Email"
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className={isError || (field.state.meta.isTouched && field.state.meta.errors.length) ? "border-destructive" : ""}
                                />

                                <FieldInfo field={field} />
                            </div>
                        )}
                    />

                    <Field
                        name="name"
                        children={(field) => (
                            <div>
                                <Label htmlFor={field.name}>Nombre</Label>

                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="text"
                                    value={field.state.value}
                                    placeholder="Nombre"
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    className={isError || (field.state.meta.isTouched && field.state.meta.errors.length) ? "border-destructive" : ""}
                                />

                                <FieldInfo field={field} />
                            </div>
                        )}
                    />

                    {
                        !user && <Field
                            name="password"
                            children={(field) => (
                                <div>
                                    <Label htmlFor={field.name}>Contraseña</Label>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        type="password"
                                        value={field.state.value}
                                        placeholder="Contraseña"
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className={isError || (field.state.meta.isTouched && field.state.meta.errors.length) ? "border-destructive" : ""}
                                    />

                                    <FieldInfo field={field} />
                                </div>
                            )}
                        />
                    }
                </div>

                <DrawerFooter>
                    <div className="flex justify-around gap-2">
                        <Subscribe
                            selector={(state) => [state.canSubmit, state.isSubmitting]}
                            children={([canSubmit, isSubmitting]) => (
                                <Button
                                    type="submit"
                                    disabled={!canSubmit}
                                    variant="default"
                                    size="lg"
                                >
                                    {isSubmitting ? "..." : "Guardar"}
                                </Button>
                            )}
                        />
                        <DrawerClose asChild>
                            <Button variant={"secondary"}>Cerrar</Button>
                        </DrawerClose>
                    </div>
                </DrawerFooter>
            </form>
        </DrawerContent>
    );
}

import FieldInfo from "@/components/FieldInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
    component: RouteComponent,
});

function RouteComponent() {
    const loginForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({ value }) => {
            console.log(value);
        },
    });

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-col w-full items-center gap-3">
                <h1 className="text-2xl text-primary uppercase tracking-wider font-semibold">
                    Login
                </h1>
                <form
                    className="w-1/2 flex flex-col gap-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        loginForm.handleSubmit();
                    }}
                >
                    <loginForm.Field
                        name="email"
                        validators={{
                            onChange: ({ value }) =>
                                !value ? "Ingrese un email" : undefined,
                        }}
                        children={(field) => (
                            <>
                                <Label htmlFor={field.name}>Email</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="email"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />

                                <FieldInfo field={field} />
                            </>
                        )}
                    />

                    <loginForm.Field
                        name="password"
                        validators={{
                            onChange: ({ value }) =>
                                !value ? "Ingrese una contraseña" : undefined,
                        }}
                        children={(field) => (
                            <>
                                <Label htmlFor={field.name}>Password</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="password"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />

                                <FieldInfo field={field} />
                            </>
                        )}
                    />

                    <loginForm.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting]) => (
                            <Button
                                type="submit"
                                disabled={!canSubmit}
                                variant="default"
                                size="lg"
                            >
                                {isSubmitting ? "..." : "Login"}
                            </Button>
                        )}
                    />
                </form>
            </div>
        </div>
    );
}

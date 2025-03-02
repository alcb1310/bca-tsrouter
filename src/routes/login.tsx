import FieldInfo from "@/components/FieldInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginPost } from "@/lib/api/auth";
import { loginStore } from "@/lib/login-store";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
    component: RouteComponent,
    validateSearch: (query) => {
        return {
            redirect: query.redirect ? query.redirect : "/",
        }

    }
});

function RouteComponent() {
    const loginForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: ({ value }) => {
            mutate(value)
        },
    });
    const navigate = useNavigate()
    const ref = Route.useSearch()

    const { mutate, isError, error } = useMutation({
        mutationFn: async ({ email, password }: { email: string, password: string }) => {
            const res = await loginPost(email, password)

            loginStore.setState((state) => ({ ...state, token: res.token }))
            navigate({
                // @ts-expect-error it will always be a valid route
                to: ref.redirect
            })
        },
    })



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
                    {isError && <p className="text-destructive self-start">{error.message}</p>}
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

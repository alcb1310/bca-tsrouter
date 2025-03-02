import { LoginForm } from "@/components/login-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
    component: RouteComponent,
    validateSearch: (query) => {
        return {
            redirect: query.redirect ? query.redirect : "/",
        }

    }
});

function RouteComponent() {
    const ref = Route.useSearch()

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">Bienvenido de nuevo</CardTitle>
                            <CardDescription>Ingresa tus credenciales para iniciar sesión</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LoginForm ref={ref.redirect as string} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

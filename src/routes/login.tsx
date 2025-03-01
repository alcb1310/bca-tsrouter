import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="flex h-screen justify-center items-center">
            <h1 className="text-2xl text-primary uppercase tracking-wider font-semibold">
                Login
            </h1>
        </div>
    );
}

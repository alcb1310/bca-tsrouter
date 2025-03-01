import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { isAuthenticated } from "@/lib/auth";
import Header from "@/components/Header";

export const Route = createFileRoute("/_auth")({
    component: RouteComponent,
    beforeLoad: async ({ location }) => {
        if (!isAuthenticated()) {
            // NOTE: NEVER use the redirect in the __root component
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                },
            });
        }
    },
});

function RouteComponent() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

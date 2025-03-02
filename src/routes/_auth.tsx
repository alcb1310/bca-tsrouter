import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { isAuthenticated } from "@/lib/auth";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

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
        <SidebarProvider>
            <AppSidebar />
            <main>
                <Outlet />
            </main>
        </SidebarProvider>
    );
}

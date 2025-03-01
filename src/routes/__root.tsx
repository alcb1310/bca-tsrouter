import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import TanstackQueryLayout from "@/integrations/tanstack-query/layout";

import TanstackQueryProvider from "@/integrations/tanstack-query/provider";
import { useStore } from "@tanstack/react-store";
import { store } from "@/lib/environment-store";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    const env = useStore(store, (state) => state.environment);

    return (
        <>
            <TanstackQueryProvider>
                <Outlet />
                {env === "development" && <TanStackRouterDevtools />}
                {env === "development" && <TanstackQueryLayout />}
            </TanstackQueryProvider>
        </>
    );
}

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import TanstackQueryLayout from "@/integrations/tanstack-query/layout";

import { useStore } from "@tanstack/react-store";
import { store } from "@/lib/environment-store";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient
}>()({
    component: RootComponent,
});

function RootComponent() {
    const env = useStore(store, (state) => state.environment);

    return (
        <>
            <Outlet />
            {env === "development" && <TanStackRouterDevtools />}
            {env === "development" && <TanstackQueryLayout />}
        </>
    );
}

import { meGet } from "@/lib/api/users";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
    component: App,
    loader: async ({ context: { queryClient } }) => {
        const data = await queryClient.ensureQueryData({
            queryKey: ["me"],
            queryFn: () => meGet(),
        });

        return data;
    },
});

function App() {
    const user = Route.useLoaderData();

    return (
        <p>
            Bienvenido{" "}
            <span className="text-success font-bold">{user.name}</span>{" "}
        </p>
    );
}

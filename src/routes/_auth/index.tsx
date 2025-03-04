import { meGet } from "@/lib/api/users";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
    component: App,
    loader: async ({ context: { queryClient } }) => {
        return await queryClient.ensureQueryData({
            queryKey: ["users", "me"],
            queryFn: () => meGet(),
        });
    },
    errorComponent: (error) => {
        console.error(error);
        return <p className="uppercase text-destructive font-extrabold tracking-wider">Error </p>
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

import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-col w-full items-center gap-3">
                <h1 className="text-2xl text-primary uppercase tracking-wider font-semibold">
                    Login
                </h1>
                <div className="w-1/2">
                    <div>
                        <Input placeholder="Email" name="email" />
                    </div>
                </div>
            </div>
        </div>
    );
}

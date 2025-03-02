import { Link, useRouter } from "@tanstack/react-router";
import { LogOutIcon, UserCircleIcon } from "lucide-react";
import { logout } from "@/lib/auth";

export default function Topbar() {
    const router = useRouter()

    function handleLogout() {
        logout()
        router.invalidate()
    }

    return (
        <div className="h-[60px] flex items-center justify-between px-5 bg-primary text-primary-foreground/80">
            <h1 className="text-2xl font-semibold">
                <Link to="/">Sistema Control Presupuestario</Link>
            </h1>

            <div className="flex gap-3">
                <UserCircleIcon size={22} />
                <LogOutIcon size={22} onClick={handleLogout} />
            </div>
        </div>
    )
}

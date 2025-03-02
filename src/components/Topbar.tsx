import { Link, useRouter } from "@tanstack/react-router";
import { LogOutIcon, UserCircleIcon } from "lucide-react";
import { logout } from "@/lib/auth";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";

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

            <Menubar className="flex gap-3 bg-primary">
                <MenubarMenu>
                    <MenubarTrigger>
                        <UserCircleIcon size={22} />
                    </MenubarTrigger>

                    <MenubarContent>
                        <MenubarItem>
                            <Link to="/usuarios/perfil">
                                Perfil
                            </Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link to="/usuarios/administrar">
                                Administrar
                            </Link>
                        </MenubarItem>
                        <MenubarItem>Cambiar contraseña</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger onClick={handleLogout}>
                        <LogOutIcon size={22} />
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

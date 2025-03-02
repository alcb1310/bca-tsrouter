import { Link } from "@tanstack/react-router";
import Parametros from "./AppSidebar/Parametros";
import Reportes from "./AppSidebar/Reportes";
import Transacciones from "./AppSidebar/Transacciones";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./ui/sidebar";

export default function AppSidebar() {
    const date = new Date();

    return (
        <Sidebar>
            <SidebarHeader className="flex justify-center items-center mb-2">
                <Link to="/">
                    <img src="/favicon.ico" alt="logo" width={50} />
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <Transacciones />
                <Reportes />
                <Parametros />
            </SidebarContent>

            <SidebarFooter>
                <p className="text-center text-xs text-muted-foreground">
                    Copyright &copy; {date.getFullYear()} Andres Court
                </p>
            </SidebarFooter>
        </Sidebar>
    );
}

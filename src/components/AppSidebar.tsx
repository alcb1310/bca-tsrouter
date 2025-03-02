import Parametros from "./AppSidebar/Parametros";
import Reportes from "./AppSidebar/Reportes";
import Transacciones from "./AppSidebar/Transacciones";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./ui/sidebar";

export default function AppSidebar() {
    const date = new Date();
    return (
        <Sidebar>
            <SidebarHeader />

            <SidebarContent>
                <Transacciones />
                <Reportes />
                <Parametros />
            </SidebarContent>

            <SidebarFooter>
                <p className="text-sm text-muted-foreground">Copyright &copy; {date.getFullYear()} Andres Court</p>
            </SidebarFooter>
        </Sidebar>
    )
}


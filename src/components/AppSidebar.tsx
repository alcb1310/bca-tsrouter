import Reportes from "./AppSidebar/Reportes";
import Transacciones from "./AppSidebar/Transacciones";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./ui/sidebar";

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />

            <SidebarContent>
                <Transacciones />
                <Reportes />
            </SidebarContent>

            <SidebarFooter>
                <p className="text-sm text-muted-foreground">Copyright &copy; 2025 Andres Court</p>
            </SidebarFooter>
        </Sidebar>
    )
}


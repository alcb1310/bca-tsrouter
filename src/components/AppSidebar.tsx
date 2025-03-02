import Transacciones from "./AppSidebar/Transacciones";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./ui/sidebar";

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />

            <SidebarContent>
                <Transacciones />
            </SidebarContent>

            <SidebarFooter />
        </Sidebar>
    )
}


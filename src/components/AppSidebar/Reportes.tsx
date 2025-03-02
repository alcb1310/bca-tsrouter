import { Link } from "@tanstack/react-router";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "../ui/collapsible";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "../ui/sidebar";
import {
    DollarSignIcon,
    FileClockIcon,
    FileIcon,
    ScaleIcon,
} from "lucide-react";

export default function Reportes() {
    return (
        <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        className="px-4 py-2 uppercase bg-primary text-white"
                        size={"lg"}
                    >
                        Reportes
                    </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <Link to="/reportes/actual" className="flex gap-1 uppercase text-sm p-3">
                                <FileIcon size={12} />
                                <p>Actual</p>
                            </Link>
                        </SidebarMenuSubItem>

                        <SidebarMenuSubItem>
                            <Link to="/reportes/cuadre" className="flex gap-1 uppercase text-sm p-3">
                                <ScaleIcon size={12} />
                                <p>Cuadre</p>
                            </Link>
                        </SidebarMenuSubItem>

                        <SidebarMenuSubItem>
                            <Link to="/reportes/gastado-por-partida" className="flex gap-1 uppercase text-sm p-3">
                                <DollarSignIcon size={12} />
                                <p>Gastado por Partida</p>
                            </Link>
                        </SidebarMenuSubItem>

                        <SidebarMenuSubItem>
                            <Link to="/reportes/historico" className="flex gap-1 uppercase text-sm p-3">
                                <FileClockIcon size={12} />
                                <p>Historico</p>
                            </Link>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenu>
    );
}

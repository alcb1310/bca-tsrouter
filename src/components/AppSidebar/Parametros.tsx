import { Link } from "@tanstack/react-router";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "../ui/sidebar";
import { BrickWallIcon, ChartColumnStackedIcon, FolderGitIcon, LayoutListIcon, ListCheckIcon, SquareUserRoundIcon } from "lucide-react";

export default function Parametros() {
    return (
        <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                            className="px-4 py-2 uppercase bg-primary text-white"
                            size={"lg"}
                        >
                            Parametros
                        </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem>
                                <Link
                                    className="flex gap-1 uppercase text-sm p-3"
                                    to="/parametros/partidas"
                                >
                                    <ListCheckIcon size={12} />
                                    <p>Partidas</p>
                                </Link>
                            </SidebarMenuSubItem>

                            <SidebarMenuSubItem>
                                <Link
                                    className="flex gap-1 uppercase text-sm p-3"
                                    to="/parametros/categorias"
                                >
                                    <ChartColumnStackedIcon size={12} />
                                    <p>Categorias</p>
                                </Link>
                            </SidebarMenuSubItem>

                            <SidebarMenuSubItem>
                                <Link
                                    className="flex gap-1 uppercase text-sm p-3"
                                    to="/parametros/materiales"
                                >
                                    <BrickWallIcon size={12} />
                                    <p>Materiales</p>
                                </Link>
                            </SidebarMenuSubItem>

                            <SidebarMenuSubItem>
                                <Link
                                    className="flex gap-1 uppercase text-sm p-3"
                                    to="/parametros/proyetos"
                                >
                                    <FolderGitIcon size={12} />
                                    <p>Proyectos</p>
                                </Link>
                            </SidebarMenuSubItem>

                            <SidebarMenuSubItem>
                                <Link
                                    className="flex gap-1 uppercase text-sm p-3"
                                    to="/parametros/proveedores"
                                >
                                    <SquareUserRoundIcon size={12} />
                                    <p>Proveedores</p>
                                </Link>
                            </SidebarMenuSubItem>

                            <SidebarMenuSubItem>
                                <Link
                                    className="flex gap-1 uppercase text-sm p-3"
                                    to="/parametros/rubros"
                                >
                                    <LayoutListIcon size={12} />
                                    <p>Rubros</p>
                                </Link>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    )
}

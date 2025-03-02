import { CopyPlusIcon, ReceiptIcon, ShoppingBagIcon } from "lucide-react";
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
import { Link } from "@tanstack/react-router";

export default function Transacciones() {
    return (
        <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        className="px-4 py-2 uppercase bg-primary text-white"
                        size={"lg"}
                    >
                        Transacciones
                    </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <Link
                                className="flex gap-1 uppercase text-sm p-3"
                                to="/transacciones/presupuesto"
                            >
                                <ShoppingBagIcon size={12} />
                                <p>Presupuesto</p>
                            </Link>
                        </SidebarMenuSubItem>

                        <SidebarMenuSubItem>
                            <Link
                                className="flex gap-1 uppercase text-sm p-3"
                                to="/transacciones/factura"
                            >
                                <ReceiptIcon size={12} />
                                <p>Facturas</p>
                            </Link>
                        </SidebarMenuSubItem>

                        <SidebarMenuSubItem>
                            <Link
                                className="flex gap-1 uppercase text-sm p-3"
                                to="/transacciones/cierre"
                            >
                                <CopyPlusIcon size={12} />
                                <p>Cierre Mensual</p>
                            </Link>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenu>
    );
}

import { EllipsisVerticalIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from '../ui/menubar'

interface CellActionsProps {
	edit?: ReactNode
	del?: ReactNode
}

export default function CellActions({ edit, del }: CellActionsProps) {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>
					<EllipsisVerticalIcon size={12} />
				</MenubarTrigger>

				<MenubarContent>
					{!!edit && <MenubarItem>{edit}</MenubarItem>}
					{!!del && <MenubarItem>{del}</MenubarItem>}
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

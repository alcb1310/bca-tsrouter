import CellActions from '@/components/DataTable/CellActions'
import { Switch } from '@/components/ui/switch'
import type { BudgetItemType } from '@/types/settings/budget-items'
import type { ColumnDef } from '@tanstack/react-table'

export default function useAllBudgetItemsColumns(): ColumnDef<BudgetItemType>[] {
	return [
		{
			accessorKey: 'code',
			header: 'Código',
			size: 100,
		},
		{
			accessorKey: 'name',
			header: 'Nombre',
		},
		{
			accessorKey: 'level',
			header: 'Nivel',
			size: 100,
		},
		{
			accessorKey: 'accumulate',
			header: 'Acumulable',
			size: 100,
			cell: (params) => {
				return (
					<div className='flex justify-center'>
						<Switch disabled checked={params.row.original.accumulate} />
					</div>
				)
			},
		},
		{
			accessorKey: 'parent',
			header: () => {
				return <p className='text-center'>Padre</p>
			},
			size: 100,
			cell: (params) => {
				return <p className='text-center'>{params.row.original.parent?.code}</p>
			},
		},
		{
			id: 'actions',
			size: 50,
			cell: () => {
				return <CellActions />
			},
		},
	]
}

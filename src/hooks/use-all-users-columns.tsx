import type { ColumnDef } from '@tanstack/react-table'

import CellActions from '@/components/DataTable/CellActions'
import DeleteUser from '@/components/users/DeleteUser'
import EditUser from '@/components/users/EditUser'
import type { UserResponse } from '@/types/users'

export default function useAllUsersColumns(
	setSelectedUser: (user: UserResponse) => void,
): ColumnDef<UserResponse>[] {
	return [
		{
			accessorKey: 'name',
			header: 'Nombre',
			// NOTE: At least one column have to have an auto size for this to work
			size: 200,
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			id: 'actions',
			size: 50,
			cell: (params) => {
				return (
					<CellActions
						edit={
							<EditUser
								user={params.row.original}
								setSelectedUser={() => setSelectedUser(params.row.original)}
							/>
						}
						del={<DeleteUser user={params.row.original} />}
					/>
				)
			},
		},
	]
}

import { PencilIcon } from 'lucide-react'

import type { UserResponse } from '@/types/users'
import { DrawerTrigger } from '../ui/drawer'

type EditUserProps = {
	user: UserResponse
	setSelectedUser: (user: UserResponse) => void
}

export default function EditUser({ user, setSelectedUser }: EditUserProps) {
	return (
		<DrawerTrigger onClick={() => setSelectedUser(user)}>
			<div className='flex gap-2'>
				<PencilIcon size={10} />
				Editar
			</div>
		</DrawerTrigger>
	)
}

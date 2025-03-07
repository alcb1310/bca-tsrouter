import PageTitle from '@/components/PageTitle'
import { meGet } from '@/lib/api/users'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/usuarios/perfil')({
	component: RouteComponent,
	loader: async ({ context: { queryClient } }) => {
		return await queryClient.ensureQueryData({
			queryKey: ['users', 'me'],
			queryFn: () => meGet(),
		})
	},
	errorComponent: (error) => {
		console.error(error)
		return <p>404</p>
	},
})

function RouteComponent() {
	const user = Route.useLoaderData()

	return (
		<>
			<PageTitle title={`Perfil de ${user.name}`} />

			<p>
				<span className='text-success'>Nombre:</span> {user.name}
			</p>
			<p>
				<span className='text-success'>Email:</span> {user.email}
			</p>

			<p className='mt-5 text-sm text-muted-foreground'>
				Nota: Para modificar el perfil, favor contactarse con el administrador
			</p>
		</>
	)
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/parametros/rubros')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/_auth/parametros/rubros"!</div>
}

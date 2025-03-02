import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/parametros/proyetos')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/parametros/proyetos"!</div>
}

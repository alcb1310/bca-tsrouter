import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/reportes/gastado-por-partida')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/reportes/gastado-por-partida"!</div>
}

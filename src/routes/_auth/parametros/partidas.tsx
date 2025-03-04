import { LoadingSpinner } from '@/components/ui/spinner'
import { getAllBudgetItems } from '@/lib/api/parametros/partidas'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/parametros/partidas')({
    component: RouteComponent,
})

function RouteComponent() {
    const { data, isFetching } = useQuery({
        queryKey: ['partidas'],
        queryFn: () => getAllBudgetItems({ query: '' })
    })

    console.log(data)

    return <div>
        {isFetching && <LoadingSpinner />}
    </div>
}

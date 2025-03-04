import DataTable from '@/components/DataTable/DataTable'
import PageTitle from '@/components/PageTitle'
import { Card, CardContent } from '@/components/ui/card'
import { LoadingSpinner } from '@/components/ui/spinner'
import useAllBudgetItemsColumns from '@/hooks/use-all-budget-items-columns'
import { getAllBudgetItems } from '@/lib/api/parametros/partidas'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'

export const Route = createFileRoute('/_auth/parametros/partidas')({
    component: RouteComponent,
})

function RouteComponent() {
    const { data, isFetching } = useQuery({
        queryKey: ['partidas'],
        queryFn: () => getAllBudgetItems({ query: '' })
    })
    const columns = useMemo(() => useAllBudgetItemsColumns(), [])

    return <div className='fex gap-5 h-full w-full flex-col items-start'>
        <PageTitle title="Partidas" />
        {isFetching && <LoadingSpinner />}

        <Card className="w-2/3 flex flex-col grow">
            <CardContent>
                <DataTable data={data || []} columns={columns} />
            </CardContent>
        </Card>
    </div>
}

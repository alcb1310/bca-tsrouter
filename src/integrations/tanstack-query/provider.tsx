import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


export default function Provider({ queryClient, children }: { queryClient: QueryClient, children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

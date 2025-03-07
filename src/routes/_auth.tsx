import AppSidebar from '@/components/AppSidebar'
import Topbar from '@/components/Topbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { isAuthenticated } from '@/lib/auth'
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
	component: RouteComponent,
	beforeLoad: async ({ location }) => {
		if (!isAuthenticated()) {
			// NOTE: NEVER use the redirect in the __root component it'll cause an infinite loop
			throw redirect({
				to: '/login',
				search: {
					redirect: location.href,
				},
			})
		}
	},
})

function RouteComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='flex grow flex-col h-screen'>
				<Topbar />

				<div className='flex grow p-5'>
					<Outlet />
				</div>
			</main>
		</SidebarProvider>
	)
}

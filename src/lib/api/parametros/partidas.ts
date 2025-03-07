import { loginStore } from '@/lib/login-store'

const server = import.meta.env.VITE_SERVER

export async function getAllBudgetItems({
	query,
	accum,
}: { query: string; accum?: boolean }) {
	let url = `${server}/parametros/partidas?query=${query}`

	if (accum !== undefined) {
		url += `&accum=${accum}`
	}

	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${loginStore.state.token}`,
		},
	})

	if (!res.ok) {
		const error = await res.json()
		throw new Error(JSON.stringify(error.error))
	}

	return await res.json()
}

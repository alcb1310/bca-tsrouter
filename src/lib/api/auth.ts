export async function loginPost(email: string, password: string) {
	const server = import.meta.env.VITE_SERVER

	const res = await fetch(`${server}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password }),
	})

	if (!res.ok) {
		const error = await res.json()
		console.log(error.error)
		throw new Error(error.error)
	}

	return await res.json()
}

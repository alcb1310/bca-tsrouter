import FieldInfo from '@/components/ui/FieldInfo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginPost } from '@/lib/api/auth'
import { loginStore } from '@/lib/login-store'
import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'

export function LoginForm({ ref }: { ref: string }) {
	const navigate = useNavigate()
	const loginForm = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		onSubmit: ({ value }) => {
			mutate(value)
		},
	})

	const { mutate, isError, error } = useMutation({
		mutationFn: async ({
			email,
			password,
		}: { email: string; password: string }) => {
			const res = await loginPost(email, password)

			loginStore.setState((state) => ({ ...state, token: res.token }))
			navigate({
				to: ref,
			})
		},
	})

	return (
		<form
			className='flex flex-col gap-3'
			onSubmit={(e) => {
				e.preventDefault()
				e.stopPropagation()
				loginForm.handleSubmit()
			}}
		>
			{isError && (
				<p className='text-destructive self-start'>{error.message}</p>
			)}
			<loginForm.Field
				name='email'
				validators={{
					onChange: ({ value }) => (!value ? 'Ingrese un correo' : undefined),
				}}
				children={(field) => (
					<>
						<Label htmlFor={field.name}>Email</Label>
						<Input
							id={field.name}
							name={field.name}
							type='email'
							value={field.state.value}
							placeholder='m@ejemplo.com'
							onChange={(e) => field.handleChange(e.target.value)}
							className={
								isError ||
								(field.state.meta.isTouched && field.state.meta.errors.length)
									? 'border-destructive'
									: ''
							}
						/>

						<FieldInfo field={field} />
					</>
				)}
			/>

			<loginForm.Field
				name='password'
				validators={{
					onChange: ({ value }) =>
						!value ? 'Ingrese una contraseña' : undefined,
				}}
				children={(field) => (
					<>
						<Label htmlFor={field.name}>Password</Label>
						<Input
							id={field.name}
							name={field.name}
							type='password'
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
							className={
								isError ||
								(field.state.meta.isTouched && field.state.meta.errors.length)
									? 'border-destructive'
									: ''
							}
						/>

						<FieldInfo field={field} />
					</>
				)}
			/>

			<loginForm.Subscribe
				selector={(state) => [state.canSubmit, state.isSubmitting]}
				children={([canSubmit, isSubmitting]) => (
					<Button
						type='submit'
						disabled={!canSubmit}
						variant='default'
						size='lg'
					>
						{isSubmitting ? '...' : 'Login'}
					</Button>
				)}
			/>
		</form>
	)
}

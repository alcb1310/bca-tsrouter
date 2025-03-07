export default function FieldInfo({ field }: { field: any }) {
	return (
		<>
			{field.state.meta.isTouched && field.state.meta.errors.length ? (
				<em className='text-destructive'>
					{field.state.meta.errors.join(', ')}
				</em>
			) : null}
			{field.state.meta.isValidating ? 'Validating...' : null}
		</>
	)
}

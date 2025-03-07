export type BudgetItemType = {
	id: string
	commpany_id: string
	name: string
	code: string
	level: number
	accumulate: boolean
	parent?: BudgetItemType
}

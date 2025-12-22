import TransactionsTable from "@/components/dashboard/TransactionsTable"

export default function TransactionsPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Transactions</h1>
			<TransactionsTable />
		</div>
	)
}


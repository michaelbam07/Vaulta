import TransactionsTable from "@/components/dashboard/TransactionsTable"
import TransferForm from "@/components/dashboard/TransferForm"

export default function TransactionsPage() {
  return (
    <main
      aria-labelledby="transactions-page-heading"
      className="space-y-6"
    >
      <h1
        id="transactions-page-heading"
        className="text-2xl font-semibold"
      >
        Transactions
      </h1>
      <TransferForm />
      <TransactionsTable />
    </main>
  )
}

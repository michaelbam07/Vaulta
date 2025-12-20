import BalanceCard from "@/components/dashboard/BalanceCard"
import SummaryCard from "@/components/dashboard/SummaryCard"
import StatCard from "@/components/dashboard/StatCard"
import TransactionsTable from "@/components/dashboard/TransactionsTable"
import IncomeExpensesChart from "@/components/dashboard/IncomeExpensesChart"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BalanceCard />
        <StatCard title="Total Income" value="₦1,250,000" />
        <StatCard title="Total Expenses" value="₦420,500" />
      </div>

      <SummaryCard />

      {/* Income vs Expenses Chart */}
      <IncomeExpensesChart />

      {/* Transactions */}
      <div>
        <h2 className="text-xl font-medium mb-4">Recent Transactions</h2>
        <TransactionsTable />
      </div>
    </div>
  )
}

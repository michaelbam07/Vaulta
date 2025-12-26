"use client"

import { useState } from "react"
import { useTransactions } from "@/context/TransactionContext"
import Skeleton from "@/components/ui/Skeleton"


const transactionsData = [
  { id: "1", date: "2025-12-15", description: "Salary", type: "Credit", amount: 450000, status: "Success" },
  { id: "2", date: "2025-12-16", description: "Electricity Bill", type: "Debit", amount: 15000, status: "Success" },
  { id: "3", date: "2025-12-17", description: "Groceries", type: "Debit", amount: 32000, status: "Pending" },
  { id: "4", date: "2025-12-18", description: "Freelance Payment", type: "Credit", amount: 120000, status: "Success" },
  { id: "5", date: "2025-12-19", description: "Internet", type: "Debit", amount: 10000, status: "Failed" },
]

export default function TransactionsTable() {
  const [typeFilter, setTypeFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")
  const [sortField, setSortField] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")

  const { transactions } = useTransactions()
  const data = transactions.length > 0 ? transactions : transactionsData


  const filtered = data
    .filter((tx) => {
      return (
        (typeFilter === "All" || tx.type === typeFilter) &&
        (statusFilter === "All" || tx.status === statusFilter)
      )
    })
    .sort((a, b) => {
      let aValue = a[sortField]
      let bValue = b[sortField]

      if (sortField === "date") {
        aValue = new Date(aValue)
        bValue = new Date(bValue)
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
      return 0
    })

    const [loading, setLoading] = useState(true)

useEffect(() => {
  const t = setTimeout(() => setLoading(false), 600)
  return () => clearTimeout(t)
}, [])
  if (loading) {
    return (
      <div aria-busy="true" aria-live="polite">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-full mt-2" />
      </div>
    )
  }

  return (
    <section aria-labelledby="transactions-heading">
      {/* Section title for screen readers */}
      <h2 id="transactions-heading" className="sr-only">
        Transactions history
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <label className="sr-only" htmlFor="type-filter">Filter by type</label>
        <select
          id="type-filter"
          aria-label="Filter transactions by type"
          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-600"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>

        <label className="sr-only" htmlFor="status-filter">Filter by status</label>
        <select
          id="status-filter"
          aria-label="Filter transactions by status"
          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-600"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <label className="sr-only" htmlFor="sort-field">Sort transactions by</label>
        <select
          id="sort-field"
          aria-label="Sort transactions by"
          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-600"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <label className="sr-only" htmlFor="sort-order">Sort order</label>
        <select
          id="sort-order"
          aria-label="Sort order"
          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-600"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm overflow-x-auto">
        <table
          role="table"
          aria-describedby="transactions-heading"
          className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium">Type</th>
              <th scope="col" className="px-6 py-3 text-right text-sm font-medium">Amount</th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-sm text-zinc-500" role="status">
                  No transactions found.
                </td>
              </tr>
            )}

            {filtered.map((tx) => (
              <tr key={tx.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700">
                <td className="px-6 py-4 text-sm">{tx.date}</td>
                <td className="px-6 py-4 text-sm">{tx.description}</td>
                <td className="px-6 py-4 text-sm">{tx.type}</td>
                <td className="px-6 py-4 text-sm text-right">
                  ₦{tx.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    aria-label={`Transaction status: ${tx.status}`}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.status === "Success"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : tx.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                        : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useTransactions } from "@/context/TransactionContext"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowUpRight, ArrowDownLeft, Filter, ArrowUpDown } from "lucide-react"

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
  const [loading, setLoading] = useState(true)

  const { transactions } = useTransactions()
  const data = transactions.length > 0 ? transactions : transactionsData

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  const filtered = data
    .filter((tx) => (typeFilter === "All" || tx.type === typeFilter) && (statusFilter === "All" || tx.status === statusFilter))
    .sort((a, b) => {
      let aV = sortField === "date" ? new Date(a[sortField]) : a[sortField]
      let bV = sortField === "date" ? new Date(b[sortField]) : b[sortField]
      return sortOrder === "asc" ? (aV > bV ? 1 : -1) : (aV < bV ? 1 : -1)
    })

  if (loading) return (
    <div className="space-y-4 p-4">
      {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-12 w-full rounded-xl bg-muted/50" />)}
    </div>
  )

  return (
    <section aria-labelledby="transactions-heading">
      <h2 id="transactions-heading" className="sr-only">Transactions history</h2>

      {/* Modern Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6 bg-muted/30 p-2 rounded-xl border border-border/50">
        <div className="flex items-center gap-2 px-3 text-muted-foreground">
          <Filter size={14} />
          <span className="text-xs font-bold uppercase tracking-widest">Filters</span>
        </div>
        
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-card border border-input rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-2 focus:ring-secondary outline-none"
        >
          <option value="All">All Types</option>
          <option value="Credit">Credits (+)</option>
          <option value="Debit">Debits (-)</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-card border border-input rounded-lg px-3 py-1.5 text-xs font-medium focus:ring-2 focus:ring-secondary outline-none"
        >
          <option value="All">All Status</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <button 
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="ml-auto flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95"
        >
          <ArrowUpDown size={14} />
          {sortOrder === "desc" ? "Newest First" : "Oldest First"}
        </button>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Date</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Transaction</th>
                <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Amount</th>
                <th className="px-6 py-4 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border bg-card">
              {filtered.map((tx) => (
                <tr key={tx.id} className="hover:bg-muted/20 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground font-medium">
                    {new Date(tx.date).toLocaleDateString('en-NG', { day: '2-digit', month: 'short' })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${tx.type === 'Credit' ? 'bg-secondary/10 text-secondary' : 'bg-primary/5 text-primary'}`}>
                        {tx.type === 'Credit' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                      </div>
                      <span className="text-sm font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {tx.description}
                      </span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-right text-sm font-bold ${tx.type === 'Credit' ? 'text-secondary' : 'text-foreground'}`}>
                    {tx.type === 'Credit' ? '+' : '-'}₦{tx.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter
                      ${tx.status === "Success" ? "bg-secondary/10 text-secondary" : 
                        tx.status === "Pending" ? "bg-accent/10 text-accent" : "bg-destructive/10 text-destructive"}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
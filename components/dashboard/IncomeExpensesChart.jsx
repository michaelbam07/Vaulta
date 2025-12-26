"use client"

import { useState, useMemo } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts"
import { useTransactions } from "@/context/TransactionContext"
import { Skeleton } from "@/components/ui/skeleton"


const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const loading = transactions.length === 0


export default function IncomeExpensesChart() {
  const { transactions } = useTransactions()
  const [view, setView] = useState("monthly")

  const data = useMemo(() => {
    const map = {}

    transactions.forEach((tx) => {
      const date = new Date(tx.date)
      const label =
        view === "weekly"
          ? DAYS[date.getDay()]
          : MONTHS[date.getMonth()]

      if (!map[label]) {
        map[label] = { label, income: 0, expenses: 0 }
      }

      if (tx.type === "Credit") {
        map[label].income += tx.amount
      } else {
        map[label].expenses += tx.amount
      }
    })

    return Object.values(map)
  }, [transactions, view])

  return (
    <section
      aria-labelledby="income-expenses-heading"
      className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 id="income-expenses-heading" className="text-lg font-medium">
          Income vs Expenses
        </h3>

        <div
          role="group"
          aria-label="Select chart view"
          className="flex rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden"
        >
          <button
            type="button"
            aria-pressed={view === "weekly"}
            onClick={() => setView("weekly")}
            className={`px-3 py-1.5 text-sm focus-visible:ring-2 focus-visible:ring-blue-600 ${
              view === "weekly"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-300"
            }`}
          >
            Weekly
          </button>

          <button
            type="button"
            aria-pressed={view === "monthly"}
            onClick={() => setView("monthly")}
            className={`px-3 py-1.5 text-sm focus-visible:ring-2 focus-visible:ring-blue-600 ${
              view === "monthly"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-300"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="income"
            name="Income"
            stroke="#15803d"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            name="Expenses"
            stroke="#b91c1c"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}

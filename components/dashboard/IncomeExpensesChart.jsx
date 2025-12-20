"use client"

import { useState } from "react"
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

const monthlyData = [
  { label: "Jan", income: 400000, expenses: 150000 },
  { label: "Feb", income: 350000, expenses: 180000 },
  { label: "Mar", income: 500000, expenses: 200000 },
  { label: "Apr", income: 450000, expenses: 220000 },
  { label: "May", income: 600000, expenses: 300000 },
  { label: "Jun", income: 550000, expenses: 250000 },
]

const weeklyData = [
  { label: "Mon", income: 80000, expenses: 30000 },
  { label: "Tue", income: 60000, expenses: 25000 },
  { label: "Wed", income: 90000, expenses: 40000 },
  { label: "Thu", income: 70000, expenses: 35000 },
  { label: "Fri", income: 120000, expenses: 50000 },
  { label: "Sat", income: 50000, expenses: 20000 },
  { label: "Sun", income: 40000, expenses: 15000 },
]

export default function IncomeExpensesChart() {
  const [view, setView] = useState("monthly")
  const data = view === "monthly" ? monthlyData : weeklyData

  return (
    <section
      aria-labelledby="income-expenses-heading"
      className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3
          id="income-expenses-heading"
          className="text-lg font-medium"
        >
          Income vs Expenses
        </h3>

        {/* View toggle */}
        <div
          role="group"
          aria-label="Select chart view"
          className="flex rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden"
        >
          <button
            type="button"
            aria-pressed={view === "weekly"}
            onClick={() => setView("weekly")}
            className={`px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
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
            className={`px-3 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              view === "monthly"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-300"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Screen-reader summary */}
      <p className="sr-only" id="chart-description">
        Line chart comparing income and expenses over a {view} period.
      </p>

      {/* Chart */}
      <div
        role="img"
        aria-labelledby="income-expenses-heading chart-description"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
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
      </div>
    </section>
  )
}

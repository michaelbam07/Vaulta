"use client"

import { useState, useMemo } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { useTransactions } from "@/context/TransactionContext"
import { Skeleton } from "@/components/ui/skeleton"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function IncomeExpensesChart() {
  const { transactions } = useTransactions()
  const [view, setView] = useState("monthly")

  const loading = transactions.length === 0

  const data = useMemo(() => {
    const map = {}
    transactions.forEach((tx) => {
      const date = new Date(tx.date)
      const label = view === "weekly" ? DAYS[date.getDay()] : MONTHS[date.getMonth()]

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
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 id="income-expenses-heading" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Financial Analytics
          </h3>
          <p className="text-2xl font-bold text-foreground">Cash Flow</p>
        </div>

        <div className="flex bg-muted p-1 rounded-lg border border-border">
          {["weekly", "monthly"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-1 text-xs font-bold rounded-md transition-all ${
                view === v 
                ? "bg-card text-primary shadow-sm" 
                : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <Skeleton className="h-[300px] w-full bg-muted/50 rounded-xl" />
      ) : (
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(var(--border))" opacity={0.5} />
              <XAxis 
                dataKey="label" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'oklch(var(--muted-foreground))', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'oklch(var(--muted-foreground))', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'oklch(var(--card))', 
                  border: '1px solid oklch(var(--border))',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="income"
                stroke="var(--color-secondary)"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorIncome)"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="var(--color-primary)"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorExpenses)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  )
}
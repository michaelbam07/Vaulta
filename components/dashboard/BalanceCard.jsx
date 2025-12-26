"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useBalance } from "@/context/BalanceContext"

export default function BalanceCard() {
  const { balance, loading } = useBalance()
  const [hidden, setHidden] = useState(false)

  return (
    <section
      aria-labelledby="balance-heading"
      className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 id="balance-heading" className="text-sm text-zinc-500">
          Account Balance
        </h2>

        <button
          type="button"
          onClick={() => setHidden(!hidden)}
          aria-label={hidden ? "Show balance" : "Hide balance"}
          className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          {hidden ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <div
        role="status"
        aria-live="polite"
        className="text-3xl font-semibold tracking-tight"
      >
        {loading ? (
          <div className="h-8 w-40 rounded bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
        ) : hidden ? (
          "••••••"
        ) : (
          `₦${balance.toLocaleString()}`
        )}
      </div>
    </section>
  )
}

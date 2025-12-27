"use client"

import { useState } from "react"
import { Eye, EyeOff, TrendingUp } from "lucide-react"
import { useBalance } from "@/context/BalanceContext"

export default function BalanceCard() {
  const { balance, loading } = useBalance()
  const [hidden, setHidden] = useState(false)

  return (
    <section
      aria-labelledby="balance-heading"
      className="rounded-2xl border border-border bg-card p-6 shadow-sm relative overflow-hidden group transition-all hover:shadow-md"
    >
      {/* Subtle brand accent - a small decorative glow in the corner */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-secondary/5 blur-3xl group-hover:bg-secondary/10 transition-colors" />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
           <div className="p-1.5 rounded-md bg-primary/5 text-primary dark:bg-primary/20">
              <TrendingUp size={14} />
           </div>
           <h2 id="balance-heading" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Total Balance
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setHidden(!hidden)}
          aria-label={hidden ? "Show balance" : "Hide balance"}
          className="text-muted-foreground hover:text-primary transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-full p-1"
        >
          {hidden ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div
        role="status"
        aria-live="polite"
        className="flex items-baseline gap-1"
      >
        {loading ? (
          <div className="h-10 w-48 rounded-lg bg-muted animate-pulse" />
        ) : (
          <>
            <span className="text-2xl font-medium text-muted-foreground self-start mt-1">₦</span>
            <span className="text-4xl font-bold tracking-tighter text-foreground">
              {hidden ? "••••••" : balance.toLocaleString()}
            </span>
          </>
        )}
      </div>

      {/* Quick Status Tag */}
      {!loading && !hidden && (
        <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-secondary">
          <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
          Live Vault Data
        </div>
      )}
    </section>
  )
}
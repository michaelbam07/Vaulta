"use client"

import { useState } from "react"
import { useBalance } from "@/context/BalanceContext"
import { Send, AlertCircle, Info } from "lucide-react"

export default function TransferForm() {
  const { balance, updateBalance, loading } = useBalance()

  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [error, setError] = useState("")
  const fee = 0

  function handleSubmit(e) {
    e.preventDefault()
    setError("")

    const numericAmount = Number(amount)

    if (!recipient) {
      setError("Please enter a recipient name.")
      return
    }

    if (!numericAmount || numericAmount <= 0) {
      setError("Enter a valid transfer amount.")
      return
    }

    if (numericAmount + fee > balance) {
      setError("Insufficient balance in your vault.")
      return
    }

    updateBalance(-numericAmount, `Transfer to ${recipient}`)

    setAmount("")
    setRecipient("")
  }

  return (
    <section
      aria-labelledby="transfer-heading"
      className="rounded-2xl border border-border bg-card p-6 shadow-sm relative overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
          <Send size={18} />
        </div>
        <h2 id="transfer-heading" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Quick Transfer
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        aria-describedby={error ? "transfer-error" : undefined}
        className="space-y-5"
      >
        {/* Recipient Input */}
        <div className="space-y-1.5">
          <label htmlFor="recipient" className="text-xs font-semibold text-foreground ml-1">
            Recipient
          </label>
          <input
            id="recipient"
            type="text"
            placeholder="Account name or @username"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm
              transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
          />
        </div>

        {/* Amount Input */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center ml-1">
            <label htmlFor="amount" className="text-xs font-semibold text-foreground">
              Amount
            </label>
            <span className="text-[10px] text-muted-foreground">
              Available: <span className="text-foreground font-bold">₦{balance.toLocaleString()}</span>
            </span>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm">₦</span>
            <input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-input bg-background pl-8 pr-4 py-2.5 text-sm
                transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
            />
          </div>
        </div>

        {/* Info/Fee Box */}
        <div className="rounded-lg bg-muted/50 p-3 flex items-center justify-between border border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Info size={14} />
            <span>Vault Transfer Fee</span>
          </div>
          <span className="text-xs font-bold text-secondary">Free</span>
        </div>

        {error && (
          <div
            id="transfer-error"
            role="alert"
            className="flex items-center gap-2 text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1"
          >
            <AlertCircle size={14} />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="w-full rounded-lg bg-primary text-primary-foreground py-3 text-sm font-bold
            transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          {loading ? "Processing..." : "Authorize Transfer"}
        </button>
      </form>
    </section>
  )
}
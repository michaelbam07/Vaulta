"use client"

import { useState } from "react"
import { useBalance } from "@/context/BalanceContext"

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
      setError("Please enter a recipient.")
      return
    }

    if (!numericAmount || numericAmount <= 0) {
      setError("Enter a valid transfer amount.")
      return
    }

    if (numericAmount + fee > balance) {
      setError("Insufficient balance.")
      return
    }

    updateBalance(
      -numericAmount,
      `Transfer to ${recipient}`
    )

    setAmount("")
    setRecipient("")
  }

  return (
    <section
      aria-labelledby="transfer-heading"
      className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm"
    >
      <h2
        id="transfer-heading"
        className="text-lg font-medium mb-4"
      >
        Transfer Money
      </h2>

      <form
        onSubmit={handleSubmit}
        aria-describedby={error ? "transfer-error" : undefined}
        className="space-y-4"
      >
        <div>
          <label htmlFor="recipient" className="sr-only">
            Recipient
          </label>
          <input
            id="recipient"
            type="text"
            placeholder="Recipient name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm
              focus-visible:ring-2 focus-visible:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="amount" className="sr-only">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Amount (₦)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm
              focus-visible:ring-2 focus-visible:ring-blue-600"
          />
        </div>

        {/* Fee transparency */}
        <div className="flex justify-between text-sm text-zinc-500">
          <span>Transfer fee</span>
          <span>₦{fee}</span>
        </div>

        {error && (
          <p
            id="transfer-error"
            role="alert"
            aria-live="assertive"
            className="text-sm text-red-600"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="w-full rounded-lg bg-zinc-900 text-white py-2 text-sm
            hover:bg-zinc-800 disabled:opacity-50
            focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {loading ? "Sending..." : "Send Money"}
        </button>
      </form>
    </section>
  )
}

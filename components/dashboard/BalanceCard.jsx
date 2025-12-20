export default function BalanceCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Available Balance</p>

      <h2 className="mt-2 text-3xl font-semibold dark:text-white">
        ₦832,450.75
      </h2>

      <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-300">
        As of today
      </p>
    </div>
  )
}

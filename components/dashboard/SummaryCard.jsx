export default function SummaryCard() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 ">
      <h3 className="text-lg font-medium mb-4 dark:text-white">
        Monthly Summary
      </h3>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500 dark:text-zinc-400">Income</span>
          <span className="font-medium">₦450,000</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-zinc-500 dark:text-zinc-400">Expenses</span>
          <span className="font-medium">₦180,300</span>
        </div>

        <div className="border-t pt-3 flex justify-between text-sm">
          <span className="text-zinc-500 dark:text-zinc-400">Net</span>
          <span className="font-semibold text-zinc-900 dark:text-white">
            ₦269,700
          </span>
        </div>
      </div>
    </div>
  )
}

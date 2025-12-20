export default function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{title}</p>

      <p className="mt-2 text-xl font-medium dark:text-white">
        {value}
      </p>
    </div>
  )
}

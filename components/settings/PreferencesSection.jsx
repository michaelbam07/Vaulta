"use client"

import { useTheme } from "next-themes"

export default function PreferencesSection() {
  const { theme, setTheme } = useTheme()

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <h2 className="font-medium mb-4">Preferences</h2>

      <div className="flex items-center justify-between">
        <span>Theme</span>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border rounded-md px-3 py-2 bg-transparent"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span>Default Currency</span>
        <select className="border rounded-md px-3 py-2 bg-transparent">
          <option>NGN (₦)</option>
          <option>USD ($)</option>
          <option>EUR (€)</option>
        </select>
      </div>
    </section>
  )
}

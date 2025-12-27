"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function PreferencesSection() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currency, setCurrency] = useState("NGN")

  // Track mounted state for client-side rendering
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // Determine if toggle should be "on"
  const isDark = theme === "dark"

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <h2 className="font-medium mb-4">Preferences</h2>

      {/* Dark Mode Toggle */}
      <div className="flex justify-between items-center text-sm mb-4">
        <span>Dark mode</span>
        <button
          role="switch"
          aria-checked={isDark}
          aria-label={`Toggle ${isDark ? "light" : "dark"} mode`}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`h-6 w-11 rounded-full transition ${
            isDark ? "bg-zinc-900" : "bg-zinc-300"
          } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          <span
            className={`block h-5 w-5 rounded-full bg-white transform transition ${
              isDark ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Theme Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <span>Theme</span>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Select theme"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>

      {/* Currency Dropdown */}
      <div className="flex items-center justify-between">
        <span>Default Currency</span>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Select default currency"
        >
          <option value="NGN">NGN (₦)</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
        </select>
      </div>
    </section>
  )
}

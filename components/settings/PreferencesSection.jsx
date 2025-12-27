"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Monitor, Globe, Palette } from "lucide-react"

export default function PreferencesSection() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currency, setCurrency] = useState("NGN")

  useEffect(() => setMounted(true), [])
  
  if (!mounted) return (
    <div className="h-64 w-full rounded-2xl bg-muted/20 animate-pulse border border-border" />
  )

  const isDark = theme === "dark"

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Palette size={18} />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          App Preferences
        </h2>
      </div>

      <div className="space-y-6">
        {/* Appearance Toggle */}
        <div className="flex justify-between items-center group">
          <div className="flex gap-3">
            <div className="mt-0.5 text-muted-foreground group-hover:text-primary transition-colors">
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Adjust the interface for night use.</p>
            </div>
          </div>
          <button
            role="switch"
            aria-checked={isDark}
            aria-label="Toggle dark mode"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`relative h-6 w-11 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
              isDark ? "bg-secondary" : "bg-muted"
            }`}
          >
            <span
              className={`block h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform ${
                isDark ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div className="h-px bg-border/50" />

        {/* Theme Select */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Monitor size={18} className="text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground">Interface Theme</p>
              <p className="text-xs text-muted-foreground">Sync with system or pick a style.</p>
            </div>
          </div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-background border border-input rounded-lg px-3 py-1.5 text-xs font-bold text-foreground focus:ring-2 focus:ring-secondary outline-none transition-all cursor-pointer"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        {/* Currency Select */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Globe size={18} className="text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground">Default Currency</p>
              <p className="text-xs text-muted-foreground">Base currency for all your vaults.</p>
            </div>
          </div>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-background border border-input rounded-lg px-3 py-1.5 text-xs font-bold text-foreground focus:ring-2 focus:ring-secondary outline-none transition-all cursor-pointer"
          >
            <option value="NGN">NGN (₦)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>
      </div>
    </section>
  )
}
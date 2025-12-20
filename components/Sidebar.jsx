"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  CreditCard,
  ArrowLeftRight,
  Settings,
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Transactions", href: "/dashboard/transactions", icon: CreditCard },
  { name: "Transfer", href: "/dashboard/transfer", icon: ArrowLeftRight },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function Sidebar({ onNavigate }) {
  const pathname = usePathname()

  return (
    <aside
      aria-label="Primary navigation"
      className="flex h-full flex-col bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-700"
    >
      {/* Brand */}
      <div className="h-16 flex items-center px-6 font-semibold text-lg border-b border-zinc-200 dark:border-zinc-700">
        Vaulta
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                ${
                  isActive
                    ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white font-medium"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
            >
              <item.icon
                className="h-4 w-4"
                aria-hidden="true"
                focusable="false"
              />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

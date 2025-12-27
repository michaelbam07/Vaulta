"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  ArrowRightLeft,
  ReceiptText,
  Settings,
  ShieldCheck,
  TrendingUp
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Transactions", href: "/dashboard/transactions", icon: ReceiptText },
  { name: "Transfer", href: "/dashboard/transfer", icon: ArrowRightLeft },
  { name: "Analytics", href: "/dashboard/analytics", icon: TrendingUp },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function Sidebar({ onNavigate, isMobile }) {
  const pathname = usePathname()

  return (
    <aside
      aria-label="Primary navigation"
      className={`flex h-full flex-col border-r border-border transition-all duration-300
        ${isMobile ? "bg-primary text-white" : "bg-card text-foreground"}`}
    >
      {/* Brand Section */}
      <div className="h-20 flex items-center px-6 gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group cursor-pointer border border-primary-foreground/10">
           <span className="text-white font-black text-2xl italic group-hover:scale-110 transition-transform">V</span>
        </div>
        {!isMobile && (
          <div className="flex flex-col">
            <span className="font-black tracking-tighter text-xl leading-none">Vaulta</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Financial Vault</span>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all
                ${isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
            >
              <div className={`transition-colors ${isActive ? "text-secondary" : "group-hover:text-primary"}`}>
                <item.icon size={18} aria-hidden="true" />
              </div>
              <span>{item.name}</span>
              
              {isActive && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer Branding / Support */}
      <div className="p-4 mt-auto">
        <div className={`rounded-2xl p-4 flex items-center gap-3 border transition-colors
          ${isMobile ? "bg-white/5 border-white/10" : "bg-muted/50 border-border"}`}>
          <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
            <ShieldCheck size={16} />
          </div>
          <div className="flex flex-col">
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isMobile ? "text-white/60" : "text-muted-foreground"}`}>
              Security Level
            </span>
            <span className={`text-xs font-bold ${isMobile ? "text-white" : "text-foreground"}`}>
              Grade A+
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
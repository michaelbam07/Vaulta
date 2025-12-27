"use client"

import { useEffect } from "react"
import { useNotifications } from "@/context/NotificationContext"
import { Check, ShieldAlert, ArrowUpRight, ArrowDownLeft, BellOff } from "lucide-react"

export default function NotificationsPanel({ close }) {
  const { notifications, markAsRead, markAllAsRead } = useNotifications()

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") close() }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [close])

  // Helper to get icons based on notification type
  const getIcon = (type) => {
    switch (type) {
      case "income": return <ArrowDownLeft className="text-secondary" size={16} />
      case "expense": return <ArrowUpRight className="text-foreground" size={16} />
      case "security": return <ShieldAlert className="text-destructive" size={16} />
      default: return <Check className="text-primary" size={16} />
    }
  }

  return (
    <div
      role="menu"
      className="w-80 md:w-96 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden focus:outline-none"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-muted/30">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Notifications
        </h4>
        <button 
          onClick={markAllAsRead}
          className="text-[10px] font-bold text-primary hover:text-secondary transition-colors"
        >
          Mark all as read
        </button>
      </div>

      {/* Notifications list */}
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        {notifications.length === 0 ? (
          <div className="py-12 flex flex-col items-center justify-center text-center px-6">
            <div className="p-3 rounded-full bg-muted mb-3">
              <BellOff size={20} className="text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">All caught up!</p>
            <p className="text-xs text-muted-foreground mt-1">No new alerts for your vault right now.</p>
          </div>
        ) : (
          <div className="divide-y divide-border/50">
            {notifications.map((n) => (
              <button
                key={n.id}
                role="menuitem"
                onClick={() => markAsRead(n.id)}
                className={`w-full text-left px-5 py-4 transition-all hover:bg-muted/50 flex gap-4 items-start ${
                  !n.read ? "bg-primary/[0.02]" : "opacity-70"
                }`}
              >
                <div className={`mt-1 p-2 rounded-lg ${!n.read ? 'bg-background shadow-sm border border-border' : 'bg-muted/50'}`}>
                  {getIcon(n.type)}
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <p className={`text-sm font-bold ${!n.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {n.title}
                    </p>
                    {!n.read && <span className="h-2 w-2 rounded-full bg-secondary" />}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {n.message}
                  </p>
                  <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-tighter">
                    {n.time}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-border bg-muted/10">
        <button
          onClick={close}
          className="w-full py-2 rounded-lg text-xs font-bold text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
        >
          Close Panel
        </button>
      </div>
    </div>
  )
}
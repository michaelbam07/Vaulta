"use client"

import { useEffect } from "react"
import { useNotifications } from "@/context/NotificationContext"

export default function NotificationsPanel({ close }) {
  const { notifications, markAsRead } = useNotifications()

  // ✅ ESC key closes panel (keyboard users)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [close])

  return (
    <div
      role="menu"
      aria-label="Notifications"
      className="absolute right-0 mt-3 w-80 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-lg z-50"
    >
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-700">
        <h4 className="font-medium text-sm">Notifications</h4>
      </div>

      {/* Notifications list */}
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 && (
          <p
            className="p-4 text-sm text-zinc-500"
            role="status"
            aria-live="polite"
          >
            No notifications
          </p>
        )}

        {notifications.map((n) => (
          <button
            key={n.id}
            role="menuitem"
            tabIndex={0}
            aria-label={`${n.title}. ${n.message}`}
            onClick={() => markAsRead(n.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                markAsRead(n.id)
              }
            }}
            className={`w-full text-left px-4 py-3 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              !n.read ? "bg-zinc-50 dark:bg-zinc-700/50" : ""
            }`}
          >
            <p className="font-medium">{n.title}</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
              {n.message}
            </p>
            <p className="text-zinc-400 text-xs mt-1">{n.time}</p>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-zinc-200 dark:border-zinc-700 text-center">
        <button
          onClick={close}
          aria-label="Close notifications"
          className="text-xs text-zinc-500 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

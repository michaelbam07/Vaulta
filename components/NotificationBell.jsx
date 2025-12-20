"use client"

import { Bell } from "lucide-react"
import { useState } from "react"
import { useNotifications } from "@/context/NotificationContext"
import NotificationsPanel from "./NotificationsPanel"

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const { unreadCount } = useNotifications()

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white" aria-label="Open notifications"
  aria-haspopup="menu"
  aria-expanded={open}
      >
        <Bell className="h-5 w-5"  aria-hidden="true"/>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {open && <NotificationsPanel close={() => setOpen(false)} />}
    </div>
  )
}

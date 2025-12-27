"use client"

import { Bell } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useNotifications } from "@/context/NotificationContext"
import NotificationsPanel from "./NotificationsPanel"

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const { unreadCount } = useNotifications()
  const containerRef = useRef(null)

  // Handle clicking outside to close the panel
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`relative p-2 rounded-xl transition-all duration-200 group ${open
            ? "bg-primary text-white shadow-lg shadow-primary/20"
            : "text-muted-foreground hover:bg-muted hover:text-primary"
          }`}
        aria-label="Open notifications"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Bell
          size={20}
          className={`transition-transform duration-300 ${open ? "scale-110" : "group-active:scale-90"}`}
          aria-hidden="true"
        />

        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            {/* Ping Animation for High-Priority feel */}
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary border-2 border-card"></span>
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
          <NotificationsPanel close={() => setOpen(false)} />
        </div>
      )}
    </div>
  )
}
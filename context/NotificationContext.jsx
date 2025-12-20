"use client"

import { createContext, useContext, useState } from "react"

const NotificationContext = createContext()

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Transaction Successful",
      message: "₦50,000 sent to John Doe",
      type: "success",
      read: false,
      time: "2 mins ago",
    },
    {
      id: 2,
      title: "Low Balance Alert",
      message: "Your balance is below ₦20,000",
      type: "warning",
      read: false,
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "New Login Detected",
      message: "New login from Chrome on Windows",
      type: "info",
      read: true,
      time: "Yesterday",
    },
  ])

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    )
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <NotificationContext.Provider
      value={{ notifications, markAsRead, unreadCount }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  return useContext(NotificationContext)
}

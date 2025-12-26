"use client"

import { createContext, useContext, useState } from "react"
import { useNotifications } from "./NotificationContext"

const BalanceContext = createContext(null)

export function BalanceProvider({ children }) {
  const { addNotification } = useNotifications()

  const [balance, setBalance] = useState(1250000) // ₦1,250,000 mock
  const [loading, setLoading] = useState(false)

  function updateBalance(amount, reason = "Balance updated") {
    setLoading(true)

    setTimeout(() => {
      setBalance((prev) => {
        const newBalance = prev + amount

        addNotification({
          title: "Balance Update",
          message: reason,
          time: "Just now",
        })

        return newBalance
      })

      setLoading(false)
    }, 500)
  }

  return (
    <BalanceContext.Provider
      value={{
        balance,
        loading,
        updateBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  )
}

export function useBalance() {
  const context = useContext(BalanceContext)
  if (!context) {
    throw new Error("useBalance must be used within BalanceProvider")
  }
  return context
}

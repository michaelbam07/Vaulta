"use client"

import { createContext, useContext, useState } from "react"
import { useNotifications } from "./NotificationContext"
import {
  LOW_BALANCE_THRESHOLD,
  LARGE_TRANSFER_THRESHOLD,
} from "./constants"
import { useSecurity } from "./SecurityContext"

const BalanceContext = createContext(null)

export function BalanceProvider({ children }) {
  const { addNotification } = useNotifications()
  const { settings } = useSecurity() // ✅ NOW USED

  const [balance, setBalance] = useState(1250000) // ₦1,250,000 mock
  const [loading, setLoading] = useState(false)

  function updateBalance(amount, reason = "Balance updated") {
    setLoading(true)

    setTimeout(() => {
      setBalance((prev) => {
        const newBalance = prev + amount

        // 🔔 Transaction alert (respects user setting)
        if (settings.transactionAlerts) {
          addNotification({
            title: "Balance Update",
            message: reason,
            time: "Just now",
          })
        }

        // 💸 Large transfer alert (respects user setting)
        if (
          settings.largeTransferAlerts &&
          amount < 0 &&
          Math.abs(amount) >= LARGE_TRANSFER_THRESHOLD
        ) {
          addNotification({
            title: "Large Transfer Alert",
            message: `₦${Math.abs(amount).toLocaleString()} was transferred`,
            time: "Just now",
          })
        }

        // ⚠️ Low balance alert (always important — cannot be disabled)
        if (newBalance <= LOW_BALANCE_THRESHOLD) {
          addNotification({
            title: "Low Balance Warning",
            message: `Your balance is ₦${newBalance.toLocaleString()}`,
            time: "Just now",
          })
        }

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

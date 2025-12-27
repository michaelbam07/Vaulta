"use client"

import { createContext, useContext, useEffect, useState } from "react"

const SecurityContext = createContext(null)

const DEFAULT_SETTINGS = {
  biometricEnabled: false,
  transactionAlerts: true,
  largeTransferAlerts: true,
}

export function SecurityProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("securitySettings")
    if (stored) {
      setSettings(JSON.parse(stored))
    }
  }, [])

  // Persist changes
  useEffect(() => {
    localStorage.setItem("securitySettings", JSON.stringify(settings))
  }, [settings])

  function toggleSetting(key) {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <SecurityContext.Provider
      value={{
        settings,
        toggleSetting,
      }}
    >
      {children}
    </SecurityContext.Provider>
  )
}

export function useSecurity() {
  const context = useContext(SecurityContext)
  if (!context) {
    throw new Error("useSecurity must be used within SecurityProvider")
  }
  return context
}

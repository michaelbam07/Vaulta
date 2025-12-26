"use client"

import { createContext, useContext, useState } from "react"

const TransactionContext = createContext(null)

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([
    {
      id: "tx-1",
      date: new Date().toISOString().slice(0, 10),
      description: "Initial balance",
      type: "Credit",
      amount: 1250000,
      status: "Success",
    },
  ])

  function addTransaction(transaction) {
    setTransactions((prev) => [transaction, ...prev])
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext)
  if (!context) {
    throw new Error("useTransactions must be used within TransactionProvider")
  }
  return context
}

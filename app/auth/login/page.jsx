"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"

export default function LoginPage() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simulating a bank-grade auth delay
    setTimeout(() => {
      if (!email) {
        setError("Please enter a valid email address.")
        setLoading(false)
        return
      }
      login(email)
      setLoading(false)
    }, 800)
  }

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-bold tracking-tight">
          Sign in
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          Secure access to your Vaulta dashboard.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        aria-describedby={error ? "login-error" : undefined}
      >
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="name@company.com"
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm 
                       transition-all duration-200
                       placeholder:text-muted-foreground/50
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
          />
        </div>

        {error && (
          <div 
            id="login-error" 
            role="alert" 
            className="flex items-center gap-2 text-destructive text-sm font-medium animate-in fade-in"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-primary text-primary-foreground py-3 text-sm font-semibold
                     transition-all duration-200 hover:brightness-110 active:scale-[0.98]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Verifying...
            </span>
          ) : "Access My Vault"}
        </button>
      </form>

      <div className="mt-10 pt-6 border-t border-border/50">
        <p className="text-sm text-center text-muted-foreground">
          New to Vaulta?{" "}
          <Link
            href="/auth/register"
            className="text-primary font-bold hover:text-secondary transition-colors"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
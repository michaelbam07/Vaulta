"use client"

import { useState } from "react"
import Link from "next/link"

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Account created (mock)")
    }, 1000)
  }

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-bold tracking-tight">
          Get Started
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          Join Vaulta and secure your financial future.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
            Full Name
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm 
                       transition-all duration-200
                       placeholder:text-muted-foreground/50
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm 
                       transition-all duration-200
                       placeholder:text-muted-foreground/50
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Create a strong password"
            className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm 
                       transition-all duration-200
                       placeholder:text-muted-foreground/50
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent"
          />
        </div>

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
              Opening Vault...
            </span>
          ) : "Create Account"}
        </button>
      </form>

      <div className="mt-10 pt-6 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-primary font-bold hover:text-secondary transition-colors focus-visible:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
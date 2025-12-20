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

    setTimeout(() => {
      if (!email) {
        setError("Please enter a valid email address.")
        setLoading(false)
        return
      }

      login(email)
      setLoading(false)
    }, 500)
  }

  return (
    <>
      <h2 className="text-zinc-900 text-lg font-medium mb-6">
        Sign in to your account
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-describedby={error ? "login-error" : undefined}
      >
        <div>
          {/* Screen-reader accessible label */}
          <label htmlFor="email" className="sr-only">
            Email address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            aria-required="true"
            aria-invalid={Boolean(error)}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          />
        </div>

        {/* Error message announced by screen readers */}
        {error && (
          <p
            id="login-error"
            role="alert"
            aria-live="assertive"
            className="text-red-600 text-sm"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className="w-full rounded-lg bg-zinc-900 text-white py-2 text-sm
            hover:bg-zinc-800 disabled:opacity-50
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-zinc-500">
        Don’t have an account?{" "}
        <Link
          href="/auth/register"
          className="text-zinc-900 hover:underline focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          Create one
        </Link>
      </p>
    </>
  )
}

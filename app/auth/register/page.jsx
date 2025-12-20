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
    <>
      <h2 className="text-zinc-900 text-lg font-medium mb-6">Create an account</h2>

      <form onSubmit={handleSubmit} className=" text-zinc-900 space-y-4">
        <div>
          <label className="block text-sm mb-1">Full name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email address</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            required
            placeholder="Create a strong password"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-zinc-900 text-white py-2 text-sm hover:bg-zinc-800 disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-zinc-500">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-zinc-900 hover:underline">
          Sign in
        </Link>
      </p>
    </>
  )
}

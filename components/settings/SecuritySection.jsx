"use client"

import { Button } from "@/components/ui/button"

export default function SecuritySection() {
  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <h2 className="font-medium mb-4">Security</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Password</span>
          <Button variant="outline">Change</Button>
        </div>

        <div className="flex justify-between">
          <span>Two-Factor Authentication</span>
          <Button variant="outline">Enable</Button>
        </div>

        <div className="flex justify-between">
          <span>Active Sessions</span>
          <Button variant="outline">View</Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"

export default function NotificationSettings() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <h2 className="font-medium mb-4">Notifications</h2>

      <div className="space-y-4">
        <label className="flex justify-between">
          <span>Email alerts</span>
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
          />
        </label>

        <label className="flex justify-between">
          <span>SMS alerts</span>
          <input
            type="checkbox"
            checked={smsAlerts}
            onChange={() => setSmsAlerts(!smsAlerts)}
          />
        </label>
      </div>
    </section>
  )
}

"use client"

import { useSecurity } from "@/context/SecurityContext"

export default function NotificationSettings() {
  const { settings, toggleSetting } = useSecurity()

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <h2 className="font-medium mb-4">Notifications</h2>

      <div className="space-y-4 text-sm">

        {/* Transaction Alerts */}
        <label className="flex items-center justify-between">
          <span>Transaction alerts</span>
          <input
            type="checkbox"
            checked={settings.transactionAlerts}
            onChange={() => toggleSetting("transactionAlerts")}
          />
        </label>

        {/* Large Transfer Alerts */}
        <label className="flex items-center justify-between">
          <span>Large transfer alerts</span>
          <input
            type="checkbox"
            checked={settings.largeTransferAlerts}
            onChange={() => toggleSetting("largeTransferAlerts")}
          />
        </label>

        {/* Email Alerts (Mock) */}
        <label className="flex items-center justify-between opacity-70">
          <span>Email alerts</span>
          <input type="checkbox" disabled checked />
        </label>

        {/* SMS Alerts (Mock) */}
        <label className="flex items-center justify-between opacity-70">
          <span>SMS alerts</span>
          <input type="checkbox" disabled />
        </label>

      </div>
    </section>
  )
}

"use client"

import { useSecurity } from "@/context/SecurityContext"
import { Bell, ShieldCheck, Mail, MessageSquare } from "lucide-react"

export default function NotificationSettings() {
  const { settings, toggleSetting } = useSecurity()

  const SettingRow = ({ title, description, icon: Icon, checked, onChange, disabled }) => (
    <div className={`flex items-center justify-between py-3 ${disabled ? "opacity-50" : ""}`}>
      <div className="flex gap-3">
        <div className="mt-0.5 text-muted-foreground">
          <Icon size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-foreground">{title}</span>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      
      {/* Custom Switch Component */}
      <button
        type="button"
        disabled={disabled}
        onClick={onChange}
        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
          checked ? "bg-secondary" : "bg-muted"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  )

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Bell size={18} />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Notification Preferences
        </h2>
      </div>

      <div className="divide-y divide-border/50">
        <SettingRow
          title="Transaction Alerts"
          description="Get notified immediately when money moves in or out."
          icon={ShieldCheck}
          checked={settings.transactionAlerts}
          onChange={() => toggleSetting("transactionAlerts")}
        />

        <SettingRow
          title="Large Transfer Alerts"
          description="Additional security alerts for transfers over ₦50,000."
          icon={AlertCircle} // Ensure AlertCircle is imported from lucide-react
          checked={settings.largeTransferAlerts}
          onChange={() => toggleSetting("largeTransferAlerts")}
        />

        <SettingRow
          title="Email Notifications"
          description="Receive weekly summaries and security logs via email."
          icon={Mail}
          checked={true}
          disabled={true}
        />

        <SettingRow
          title="SMS Security Codes"
          description="One-time passwords sent to your registered phone."
          icon={MessageSquare}
          checked={false}
          disabled={true}
        />
      </div>
    </section>
  )
}
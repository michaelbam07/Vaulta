"use client"

import { Button } from "@/components/ui/button"
import { useSecurity } from "@/context/SecurityContext"

export default function SecuritySection() {
  const { settings, toggleSetting } = useSecurity()

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <h2 className="font-medium mb-4">Security</h2>

      <div className="space-y-4 text-sm">

        {/* Password */}
        <div className="flex justify-between items-center">
          <span>Password</span>
          <Button variant="outline">Change</Button>
        </div>

        {/* Two-Factor Auth */}
        <div className="flex justify-between items-center">
          <span>Two-Factor Authentication</span>
          <Button variant="outline">Enable</Button>
        </div>

        {/* Active Sessions */}
        <div className="flex justify-between items-center">
          <span>Active Sessions</span>
          <Button variant="outline">View</Button>
        </div>

        {/* Biometric Login */}
        <div className="flex justify-between items-center pt-3 border-t border-zinc-200 dark:border-zinc-700">
          <div>
            <p className="font-medium">Biometric Login</p>
            <p className="text-xs text-zinc-500">
              Use fingerprint or Face ID to sign in
            </p>
          </div>

          <button
            role="switch"
            aria-checked={settings.biometricEnabled}
            onClick={() => toggleSetting("biometricEnabled")}
            className={`h-6 w-11 rounded-full transition ${
              settings.biometricEnabled
                ? "bg-zinc-900 dark:bg-zinc-100"
                : "bg-zinc-300 dark:bg-zinc-700"
            }`}
          >
            <span
              className={`block h-5 w-5 rounded-full bg-white dark:bg-zinc-900 transform transition ${
                settings.biometricEnabled
                  ? "translate-x-5"
                  : "translate-x-1"
              }`}
            />
          </button>
        </div>

      </div>
    </section>
  )
}

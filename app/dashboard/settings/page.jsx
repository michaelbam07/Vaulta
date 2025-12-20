"use client"

import ProfileSection from "@/components/settings/ProfileSection"
import PreferencesSection from "@/components/settings/PreferencesSection"
import SecuritySection from "@/components/settings/SecuritySection"
import NotificationSettings from "@/components/settings/NotificationSettings"
import DangerZone from "@/components/settings/DangerZone"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Account Settings</h1>

      <ProfileSection />
      <PreferencesSection />
      <SecuritySection />
      <NotificationSettings />
      <DangerZone />
    </div>
  )
}

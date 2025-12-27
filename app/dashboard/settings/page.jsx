"use client"

import { useState } from "react"
import { 
  User, 
  Settings as SettingsIcon, 
  ShieldCheck, 
  Bell, 
  AlertOctagon,
  ChevronRight
} from "lucide-react"

import ProfileSection from "@/components/settings/ProfileSection"
import PreferencesSection from "@/components/settings/PreferencesSection"
import SecuritySection from "@/components/settings/SecuritySection"
import NotificationSettings from "@/components/settings/NotificationSettings"
import DangerZone from "@/components/settings/DangerZone"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User, component: <ProfileSection /> },
    { id: "preferences", label: "Preferences", icon: SettingsIcon, component: <PreferencesSection /> },
    { id: "security", label: "Security", icon: ShieldCheck, component: <SecuritySection /> },
    { id: "notifications", label: "Notifications", icon: Bell, component: <NotificationSettings /> },
    { id: "danger", label: "Danger Zone", icon: AlertOctagon, component: <DangerZone />, variant: "danger" },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-primary">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account identity, security, and app experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Settings Navigation Sidebar */}
        <aside className="lg:col-span-3">
          <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              const isDanger = tab.variant === "danger"

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap lg:w-full
                    ${isActive 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : isDanger 
                        ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30" 
                        : "text-muted-foreground hover:bg-muted hover:text-primary"
                    }`}
                >
                  <Icon size={18} className={isActive ? "text-secondary" : ""} />
                  <span className="flex-1 text-left">{tab.label}</span>
                  {isActive && <ChevronRight size={14} className="hidden lg:block opacity-50" />}
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-9 space-y-6">
          <div className="transition-all duration-300 transform">
            {tabs.find((t) => t.id === activeTab)?.component}
          </div>
          
          {/* Helpful Tip (UX Polish) */}
          <div className="p-4 rounded-xl bg-muted/30 border border-dashed border-border text-center">
            <p className="text-xs text-muted-foreground">
              All changes are synced across your devices automatically. 
              Need help? <span className="text-primary font-bold cursor-pointer hover:underline">Contact Vaulta Support</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
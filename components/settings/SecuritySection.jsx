"use client"

import { useSecurity } from "@/context/SecurityContext"
import { ShieldCheck, Lock, Fingerprint, Smartphone, History, ChevronRight } from "lucide-react"

export default function SecuritySection() {
  const { settings, toggleSetting } = useSecurity()

  const SecurityAction = ({ title, description, icon: Icon, actionLabel, onClick }) => (
    <div className="flex items-center justify-between py-4 group cursor-pointer" onClick={onClick}>
      <div className="flex gap-4">
        <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline">
        {actionLabel}
        <ChevronRight size={14} />
      </button>
    </div>
  )

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <ShieldCheck size={18} />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Vault Security
        </h2>
      </div>

      <div className="divide-y divide-border/50">
        {/* Password */}
        <SecurityAction 
          title="Account Password"
          description="Last updated 3 months ago"
          icon={Lock}
          actionLabel="Update"
        />

        {/* Two-Factor Auth */}
        <SecurityAction 
          title="Two-Factor Authentication"
          description="Add an extra layer of protection to your account."
          icon={Smartphone}
          actionLabel="Set Up"
        />

        {/* Active Sessions */}
        <SecurityAction 
          title="Active Sessions"
          description="You are currently signed in on 2 devices."
          icon={History}
          actionLabel="Manage"
        />

        {/* Biometric Toggle */}
        <div className="flex items-center justify-between py-5 pt-6 mt-2 border-t-2 border-primary/5">
          <div className="flex gap-4">
            <div className={`p-2 rounded-lg transition-colors ${settings.biometricEnabled ? 'bg-secondary/10 text-secondary' : 'bg-muted text-muted-foreground'}`}>
              <Fingerprint size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-foreground">Biometric Login</p>
                {settings.biometricEnabled && (
                  <span className="text-[10px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">Active</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">Quick access via Touch ID or Face ID.</p>
            </div>
          </div>

          <button
            role="switch"
            aria-checked={settings.biometricEnabled}
            onClick={() => toggleSetting("biometricEnabled")}
            className={`relative h-6 w-11 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
              settings.biometricEnabled ? "bg-secondary" : "bg-muted"
            }`}
          >
            <span
              className={`block h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform ${
                settings.biometricEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
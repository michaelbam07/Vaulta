"use client"

import { LogOut, Trash2, AlertTriangle } from "lucide-react"

export default function DangerZone() {
  return (
    <section className="rounded-2xl border border-destructive/20 bg-destructive/5 overflow-hidden">
      {/* Warning Header */}
      <div className="bg-destructive/10 px-6 py-3 flex items-center gap-2 border-b border-destructive/10">
        <AlertTriangle size={16} className="text-destructive" />
        <h2 className="text-xs font-bold uppercase tracking-widest text-destructive">
          Danger Zone
        </h2>
      </div>

      <div className="p-6 space-y-6">
        {/* Action 1: Logout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-foreground">Sign Out</p>
            <p className="text-xs text-muted-foreground">Terminate your current session on this device.</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors">
            <LogOut size={16} />
            Logout
          </button>
        </div>

        <div className="h-px bg-destructive/10 w-full" />

        {/* Action 2: Close Account */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-destructive">Close Account</p>
            <p className="text-xs text-muted-foreground">Permanently delete your vault and all associated data.</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-destructive px-4 py-2 text-sm font-bold text-white hover:brightness-110 active:scale-95 transition-all shadow-sm shadow-destructive/20">
            <Trash2 size={16} />
            Delete Vault
          </button>
        </div>
      </div>
    </section>
  )
}
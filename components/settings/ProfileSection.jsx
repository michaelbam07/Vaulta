"use client"

import { useState } from "react"
import { User, Mail, Camera, Save } from "lucide-react"

export default function ProfileSection() {
  const [name, setName] = useState("Oladapo Bamgbose")
  const [email, setEmail] = useState("oladapo@email.com")

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <User size={18} />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Profile Information
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar Section */}
        <div className="relative group">
          <div className="h-24 w-24 rounded-2xl bg-muted flex items-center justify-center border-2 border-dashed border-border group-hover:border-secondary transition-colors overflow-hidden">
            <span className="text-2xl font-bold text-muted-foreground group-hover:text-secondary">
              OB
            </span>
          </div>
          <button className="absolute -bottom-2 -right-2 p-1.5 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary transition-colors">
            <Camera size={14} />
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex-1 w-full space-y-5">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-foreground ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm">
              <Save size={16} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
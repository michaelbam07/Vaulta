"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProfileSection() {
  const [name, setName] = useState("Oladapo Bamgbose")
  const [email, setEmail] = useState("oladapo@email.com")

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 bg-white dark:bg-zinc-900">
      <h2 className="font-medium mb-4">Profile Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <Button className="mt-4">Save Changes</Button>
    </section>
  )
}

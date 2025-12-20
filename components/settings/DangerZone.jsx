"use client"

import { Button } from "@/components/ui/button"

export default function DangerZone() {
  return (
    <section className="rounded-xl border border-red-200 dark:border-red-800 p-6 bg-red-50 dark:bg-red-900/20">
      <h2 className="font-medium text-red-700 dark:text-red-400 mb-4">
        Danger Zone
      </h2>

      <div className="flex flex-col md:flex-row gap-3">
        <Button variant="destructive">Log Out</Button>
        <Button variant="outline" className="text-red-600">
          Close Account
        </Button>
      </div>
    </section>
  )
}

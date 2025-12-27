"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Sidebar from "./Sidebar"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export default function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button 
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-muted/50 text-primary hover:bg-muted transition-all active:scale-90"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>

      <SheetContent 
        side="left" 
        className="p-0 w-72 border-r-border bg-primary text-white"
      >
        {/* Mobile Header within the Drawer */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-primary font-black text-xl italic">V</span>
            </div>
            <span className="font-bold tracking-tighter text-lg">Vaulta</span>
          </div>
          <SheetClose className="rounded-lg p-1 hover:bg-white/10 transition-colors">
            <X size={20} className="text-white/70" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>

        {/* Sidebar Content */}
        <div className="h-[calc(100%-80px)]">
           <Sidebar isMobile onNavigate={() => setOpen(false)} />
        </div>
        
        {/* Mobile Bottom Decal */}
        <div className="absolute bottom-8 left-6 right-6 p-4 rounded-xl bg-white/5 border border-white/10">
           <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">Security Status</p>
           <p className="text-xs font-medium text-secondary flex items-center gap-1.5">
             <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
             End-to-End Encrypted
           </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
'use client'

import { User, Moon, Sun, LogOut, ChevronDown } from "lucide-react"
import MobileSidebar from "./MobileSidebar"
import { useTheme } from "@/context/ThemeContext"
import { useAuth } from "@/context/AuthContext"
import NotificationBell from "@/components/NotificationBell"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const { user, logout } = useAuth() // Assuming 'user' object exists in context

    return (
        <header className="sticky top-0 z-40 h-16 w-full border-b border-border bg-card/80 backdrop-blur-md px-4 md:px-8 flex items-center justify-between transition-all">
            {/* Left Side: Navigation & Greeting */}
            <div className="flex items-center gap-4">
                <div className="md:hidden">
                    <MobileSidebar />
                </div>
                <div className="hidden sm:flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none mb-1">
                        Vault Status: <span className="text-secondary">Secure</span>
                    </span>
                    <h1 className="text-sm font-bold text-foreground">
                        Welcome back, <span className="text-primary">{user?.name?.split(' ')[0] || 'Oladapo'}</span>
                    </h1>
                </div>
            </div>

            {/* Right Side: Actions */}
            <div className="flex items-center gap-2 md:gap-5">
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-primary transition-all"
                    aria-label="Toggle theme"
                >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </button>

                {/* Notifications */}
                <div className="relative">
                    <NotificationBell />
                </div>

                {/* Vertical Divider */}
                <div className="h-6 w-px bg-border hidden md:block" />

                {/* User Profile & Logout */}
                <div className="flex items-center gap-3 pl-2">
                    <div className="flex flex-col items-end hidden md:flex">
                        <span className="text-xs font-bold text-foreground leading-none">
                            {user?.name || "Oladapo Bamgbose"}
                        </span>
                        <span className="text-[10px] text-muted-foreground">Premium Account</span>
                    </div>
                    
                    <div className="group relative">
                        <button className="h-9 w-9 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                            <User size={18} />
                        </button>
                        
                        {/* Simple Tooltip Logout - can be expanded to a full menu */}
                        <div className="absolute right-0 top-full mt-2 hidden group-hover:block pt-2">
                            <div className="bg-card border border-border shadow-xl rounded-xl p-1 min-w-[140px]">
                                <button
                                    onClick={logout}
                                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-destructive hover:bg-destructive/5 rounded-lg transition-colors"
                                >
                                    <LogOut size={14} />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
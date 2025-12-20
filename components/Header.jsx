'use client'

import { Bell, User, Moon, Sun } from "lucide-react"
import MobileSidebar from "./MobileSidebar"
import { useTheme } from "@/context/ThemeContext"
import { useAuth } from "@/context/AuthContext"
import NotificationBell from "@/components/NotificationBell"


export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const { logout } = useAuth()

    return (
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 md:px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <MobileSidebar />
                <span className="text-sm text-zinc-500 dark:text-zinc-400 hidden sm:block">
                    Welcome back
                </span>
            </div>

            <div className="flex items-center gap-4">
                <button
                    role="switch"
                    aria-checked={theme === "dark"}
                    aria-label="Toggle dark mode"
                    onClick={toggleTheme}
                >
                    {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </button>


                <NotificationBell />

                <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                    <User className="h-4 w-4 text-zinc-600 dark:text-zinc-200" />
                </div>



                <button
                    onClick={logout}
                    className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline"
                >
                    Logout
                </button>
            </div>
        </header>
    )
}


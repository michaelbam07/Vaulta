import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import ProtectedRoute from "@/components/ProtectedRoute"

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-zinc-50">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 border-r border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <Sidebar />
        </aside>

        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  )
}

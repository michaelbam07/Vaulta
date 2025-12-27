"use client"

import { Plus, ArrowUpRight, ArrowDownLeft, Filter } from "lucide-react"
import BalanceCard from "@/components/dashboard/BalanceCard"
import SummaryCard from "@/components/dashboard/SummaryCard"
import StatCard from "@/components/dashboard/StatCard"
import TransactionsTable from "@/components/dashboard/TransactionsTable"
import IncomeExpensesChart from "@/components/dashboard/IncomeExpensesChart"

export default function DashboardPage() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header with Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-primary">Overview</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitoring your vault activity for <span className="text-foreground font-bold">December 2025</span>
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card text-xs font-bold hover:bg-muted transition-all">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:brightness-110 shadow-lg shadow-primary/20 transition-all">
            <Plus size={16} />
            Add Funds
          </button>
        </div>
      </div>

      {/* Financial Pulse - High Level Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BalanceCard />
        <StatCard 
          title="Total Income" 
          value="₦1,250,000" 
          trend="+12.5%" 
          icon={<ArrowDownLeft className="text-secondary" size={20} />} 
        />
        <StatCard 
          title="Total Expenses" 
          value="₦420,500" 
          trend="-2.1%" 
          icon={<ArrowUpRight className="text-destructive" size={20} />} 
        />
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Analytics Section - Takes up 2/3 */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-primary">Cash Flow Analytics</h2>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-secondary">
                  <span className="h-2 w-2 rounded-full bg-secondary" /> Income
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground" /> Expenses
                </span>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <IncomeExpensesChart />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-primary">Recent Transactions</h2>
              <button className="text-xs font-bold text-secondary hover:underline">View All</button>
            </div>
            <TransactionsTable />
          </div>
        </div>

        {/* Side Section - Takes up 1/3 */}
        <div className="space-y-8">
          <SummaryCard />
          
          {/* Internal Quick Security Check */}
          <div className="rounded-2xl bg-primary p-6 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-sm font-bold mb-2">Security Shield Active</h3>
              <p className="text-xs text-primary-foreground/70 mb-4">Your account is protected with 256-bit encryption.</p>
              <button className="text-[10px] font-black uppercase tracking-widest py-2 px-4 bg-secondary text-primary rounded-lg">
                Run Audit
              </button>
            </div>
            {/* Abstract Background Decoration */}
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          </div>
        </div>

      </div>
    </div>
  )
}
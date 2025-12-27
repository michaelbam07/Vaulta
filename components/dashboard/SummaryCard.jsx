import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react"

export default function SummaryCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Wallet size={18} />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
          Monthly Summary
        </h3>
      </div>

      <div className="space-y-5">
        {/* Income Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <ArrowUpRight size={16} />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Income</span>
          </div>
          <span className="text-sm font-bold text-secondary">
            +₦450,000
          </span>
        </div>

        {/* Expenses Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <ArrowDownRight size={16} />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Expenses</span>
          </div>
          <span className="text-sm font-bold text-foreground">
            -₦180,300
          </span>
        </div>

        {/* Net Value Section */}
        <div className="mt-6 border-t border-border pt-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Net Savings
              </p>
              <p className="text-2xl font-bold tracking-tighter text-foreground">
                ₦269,700
              </p>
            </div>
            <div className="h-10 w-24 bg-secondary/5 rounded-md flex items-center justify-center border border-secondary/20">
               <span className="text-[10px] font-bold text-secondary uppercase">Healthy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
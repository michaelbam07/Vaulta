import TransactionsTable from "@/components/dashboard/TransactionsTable"
import TransferForm from "@/components/dashboard/TransferForm"

export default function TransactionsPage() {
  return (
    <main
      aria-labelledby="transactions-page-heading"
      className="max-w-[1200px] mx-auto space-y-8"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1
            id="transactions-page-heading"
            className="text-3xl font-bold tracking-tight text-foreground"
          >
            Transactions
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Monitor your activity and move funds securely.
          </p>
        </div>
        
        {/* Optional: Add a "Download Statement" or "Filter" button here later */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Top Column: The Action (Transfer Form) */}
        <section className="lg:col-span-4 sticky top-6">
          <div className="bg-card rounded-xl border border-border p-1 shadow-sm">
            <TransferForm />
          </div>
        </section>

        {/* Right/Bottom Column: The Data (Table) */}
        <section className="lg:col-span-8">
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
             <div className="px-6 py-4 border-b border-border bg-muted/30">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Recent Activity
                </h3>
             </div>
            <TransactionsTable />
          </div>
        </section>
      </div>
    </main>
  )
}
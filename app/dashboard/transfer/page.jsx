export default function TransferPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Transfer Funds</h1>
                <p className="text-muted-foreground text-sm mt-1">Move money safely to other accounts or saved favorites.</p>
            </div>

            <section className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                <div className="border-b border-border bg-muted/30 px-6 py-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">New Transaction</h3>
                </div>
                
                <form className="p-6 grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Recipient Field */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="recipient" className="text-sm font-medium text-foreground ml-1">
                                Recipient Details
                            </label>
                            <input 
                                id="recipient"
                                type="text" 
                                name="recipient" 
                                placeholder="Account number or email" 
                                className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent transition-all" 
                            />
                        </div>

                        {/* Amount Field with Currency Indicator */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="amount" className="text-sm font-medium text-foreground ml-1">
                                Amount
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                                <input 
                                    id="amount"
                                    type="number" 
                                    name="amount" 
                                    placeholder="0.00" 
                                    className="w-full rounded-lg border border-input bg-background pl-7 pr-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-transparent transition-all" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Checkbox Styling */}
                    <label className="flex items-center gap-3 group cursor-pointer w-fit">
                        <input 
                            type="checkbox" 
                            name="save" 
                            className="h-4 w-4 rounded border-input text-secondary focus:ring-secondary transition-colors"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Save as favorite for future transfers</span>
                    </label>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                        <p className="text-xs text-muted-foreground italic max-w-[200px]">
                            Funds are typically available within 1-3 business days.
                        </p>
                        <button 
                            type="button" 
                            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all"
                        >
                            Confirm & Send
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}
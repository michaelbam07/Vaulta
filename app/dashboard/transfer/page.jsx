export default function TransferPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-semibold">Transfer</h1>

			<section className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6">
				<form className="grid gap-4 max-w-md">
					<label className="flex flex-col">
						<span className="text-sm font-medium">Recipient account</span>
						<input type="text" name="recipient" placeholder="Account number or email" className="mt-1 rounded-lg border border-zinc-300 px-3 py-2" />
					</label>

					<label className="flex flex-col">
						<span className="text-sm font-medium">Amount</span>
						<input type="number" name="amount" placeholder="0.00" className="mt-1 rounded-lg border border-zinc-300 px-3 py-2" />
					</label>

					<label className="flex items-center gap-2">
						<input type="checkbox" name="save" />
						<span className="text-sm">Save as favorite</span>
					</label>

					<div>
						<button type="button" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2">Send transfer</button>
					</div>
				</form>
			</section>
		</div>
	)
}


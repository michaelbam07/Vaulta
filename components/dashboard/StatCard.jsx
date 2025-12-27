export default function StatCard({ title, value, trend, trendType = "neutral" }) {
  // trendType can be 'positive' (green), 'negative' (red), or 'neutral' (navy/gold)
  
  const trendColors = {
    positive: "text-secondary bg-secondary/10",
    negative: "text-destructive bg-destructive/10",
    neutral: "text-primary bg-primary/10",
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md group">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
          <p className="text-2xl font-bold tracking-tight text-foreground">
            {value}
          </p>
        </div>

        {trend && (
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${trendColors[trendType]}`}>
            {trend}
          </span>
        )}
      </div>
      
      {/* Subtle bottom accent line that glows on hover */}
      <div className="mt-4 h-1 w-full rounded-full bg-muted overflow-hidden">
        <div className="h-full w-1/3 bg-primary transition-all group-hover:w-full duration-500 opacity-20" />
      </div>
    </div>
  )
}
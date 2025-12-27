import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, PieChart as PieIcon } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Financial Analytics</h1>
      
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total Revenue" value="$128,430" change="+12.5%" icon={<DollarSign />} />
        <StatCard title="Net Profit" value="$42,150" change="+8.2%" icon={<TrendingUp />} />
        <StatCard title="Expenses" value="$86,280" change="-2.1%" icon={<PieIcon />} />
      </div>

      {/* Main Performance Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold mb-4">Revenue vs. Expenses</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={0.1} fill="#3b82f6" />
              <Area type="monotone" dataKey="expenses" stroke="#94a3b8" fillOpacity={0.1} fill="#94a3b8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
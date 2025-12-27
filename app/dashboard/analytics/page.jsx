"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, PieChart as PieIcon } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
];

const AnalyticsPage = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Financial Analytics</h1>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total Revenue" value="$128,430" trend="+12.5%" trendType="positive" icon={<DollarSign />} />
        <StatCard title="Net Profit" value="$42,150" trend="+8.2%" trendType="positive" icon={<TrendingUp />} />
        <StatCard title="Expenses" value="$86,280" trend="-2.1%" trendType="negative" icon={<PieIcon />} />
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

export default AnalyticsPage;
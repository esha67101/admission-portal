// Small Component Example - Stats Card


import Card from "@/components/ui/Card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: number;
}

export default function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <Card hover={true} className="text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-gray-600 text-sm mb-2">{title}</div>
      
      {trend !== undefined && (
        <div className={`text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last month
        </div>
      )}
    </Card>
  );
}
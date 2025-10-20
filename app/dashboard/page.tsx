// SSR Example 
import StatsCard from "@/components/dashboard/StatsCard";
import RecentApplications from "@/components/dashboard/RecentApplications";
import QuickActions from "@/components/dashboard/QuickActions";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

// Server component - async function
export default async function DashboardPage() {
  
  const stats = await fetchStats();

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            <strong>Rendering:</strong> SSR (Server-Side Rendering) - 
            Fresh data on every request
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard 
            title="Total Applications" 
            value={stats.applications} 
            icon="📝"
            trend={12}
          />
          <StatsCard 
            title="Approved" 
            value={stats.approved} 
            icon="✅"
            trend={8}
          />
          <StatsCard 
            title="Pending" 
            value={stats.pending} 
            icon="⏳"
            trend={-3}
          />
          <StatsCard 
            title="Total Students" 
            value={stats.students} 
            icon="👥"
            trend={15}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <RecentApplications />
            <ActivityFeed />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}

// Simulated server-side data fetch
async function fetchStats() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    applications: 245,
    approved: 180,
    pending: 65,
    students: 5240
  };
}
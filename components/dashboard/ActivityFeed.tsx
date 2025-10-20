"use client";

// Small Component - Activity Timeline


import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";

interface Activity {
  id: number;
  action: string;
  user: string;
  time: string;
  icon: string;
}

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect - Component mount hone pe data load karna
  useEffect(() => {
    // Simulating API call
    const fetchActivities = () => {
      setTimeout(() => {
        const dummyData: Activity[] = [
          { id: 1, action: "New application submitted", user: "Ali Khan", time: "2 mins ago", icon: "📄" },
          { id: 2, action: "Application approved", user: "Sara Ahmed", time: "15 mins ago", icon: "✅" },
          { id: 3, action: "Document uploaded", user: "Hassan Ali", time: "1 hour ago", icon: "📎" },
          { id: 4, action: "Interview scheduled", user: "Fatima Noor", time: "3 hours ago", icon: "📅" },
        ];
        setActivities(dummyData);
        setLoading(false);
      }, 1000);
    };

    fetchActivities();

    // Cleanup function (optional)
    return () => {
      console.log("Component unmounted");
    };
  }, []); // Empty dependency array = run once on mount

  if (loading) {
    return (
      <Card>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
        <div className="text-center py-8">
          <div className="animate-spin text-4xl">⏳</div>
          <p className="text-gray-600 mt-2">Loading activities...</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="text-2xl">{activity.icon}</div>
            <div className="flex-1">
              <div className="text-gray-800 font-medium">{activity.action}</div>
              <div className="text-sm text-gray-600">
                by {activity.user} • {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
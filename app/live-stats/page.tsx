"use client";

// CSR Example

import { useState, useEffect } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface LiveStats {
  onlineUsers: number;
  activeApplications: number;
  serverLoad: number;
  lastUpdate: string;
}

export default function LiveStatsPage() {
  const [stats, setStats] = useState<LiveStats>({
    onlineUsers: 0,
    activeApplications: 0,
    serverLoad: 0,
    lastUpdate: ""
  });
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Fetch live stats
  const fetchLiveStats = () => {
    setLoading(true);
    
    // Simulate API call with random data
    setTimeout(() => {
      setStats({
        onlineUsers: Math.floor(Math.random() * 100) + 50,
        activeApplications: Math.floor(Math.random() * 50) + 10,
        serverLoad: Math.floor(Math.random() * 100),
        lastUpdate: new Date().toLocaleTimeString()
      });
      setLoading(false);
    }, 1000);
  };

  // Initial fetch
  useEffect(() => {
    fetchLiveStats();
  }, []);

  // Auto-refresh every 5 seconds
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchLiveStats();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Live Statistics
          </h1>
          <p className="text-gray-600">
            <strong>Rendering:</strong> CSR (Client-Side Rendering) - 
            Real-time data updates in browser
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              onClick={fetchLiveStats}
              variant="primary"
              size="md"
            >
              🔄 Refresh Now
            </Button>
            <Button
              onClick={() => setAutoRefresh(!autoRefresh)}
              variant={autoRefresh ? "danger" : "secondary"}
              size="md"
            >
              {autoRefresh ? "⏸️ Stop Auto-Refresh" : "▶️ Start Auto-Refresh"}
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Last updated: <strong>{stats.lastUpdate}</strong>
          </div>
        </div>

        {/* Live Stats Cards */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin text-6xl mb-4">⏳</div>
            <p className="text-gray-600">Loading live data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Online Users */}
            <Card hover={true} className="text-center">
              <div className="text-5xl mb-3">👥</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stats.onlineUsers}
              </div>
              <div className="text-gray-600">Online Users</div>
              <div className="mt-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </Card>

            {/* Active Applications */}
            <Card hover={true} className="text-center">
              <div className="text-5xl mb-3">📝</div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {stats.activeApplications}
              </div>
              <div className="text-gray-600">Active Applications</div>
              <div className="mt-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </Card>

            {/* Server Load */}
            <Card hover={true} className="text-center">
              <div className="text-5xl mb-3">⚡</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {stats.serverLoad}%
              </div>
              <div className="text-gray-600">Server Load</div>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${stats.serverLoad}%` }}
                  />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Real-time Activity Log */}
        <Card>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Real-time Activity Log
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm"
              >
                <span className="text-gray-700">
                  {i % 2 === 0 ? '📄 New application submitted' : '✅ Application approved'}
                </span>
                <span className="text-gray-500">
                  {new Date(Date.now() - i * 60000).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-purple-50 rounded-lg">
          <h3 className="text-lg font-bold text-purple-900 mb-2">
            💡 About CSR (Client-Side Rendering)
          </h3>
          <p className="text-purple-800">
            This page renders in the browser and fetches fresh data from the server. 
            Perfect for dashboards, real-time updates, and interactive features that 
            need frequently changing data. Auto-refreshes every 5 seconds!
          </p>
        </div>
      </div>
    </div>
  );
}
// Small Component - Recent Applications List


import Card from "@/components/ui/Card";

interface Application {
  id: number;
  name: string;
  program: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

export default function RecentApplications() {
  // Demo data
  const applications: Application[] = [
    { id: 1, name: "Ahmed Ali", program: "Computer Science", status: "approved", date: "2025-10-19" },
    { id: 2, name: "Fatima Khan", program: "Business", status: "pending", date: "2025-10-18" },
    { id: 3, name: "Hassan Raza", program: "Engineering", status: "approved", date: "2025-10-17" },
    { id: 4, name: "Ayesha Malik", program: "Medicine", status: "pending", date: "2025-10-16" },
  ];

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  return (
    <Card>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Applications</h3>
      <div className="space-y-3">
        {applications.map((app) => (
          <div 
            key={app.id} 
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{app.name}</div>
              <div className="text-sm text-gray-600">{app.program}</div>
            </div>
            <div className="text-center mx-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[app.status]}`}>
                {app.status}
              </span>
            </div>
            <div className="text-sm text-gray-500">{app.date}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
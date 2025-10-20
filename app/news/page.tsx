// ISR Example

import Card from "@/components/ui/Card";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  icon: string;
}

// ISR Configuration 
export const revalidate = 60;

export default async function NewsPage() {
  // Data fetch with timestamp
  const news = await fetchNews();
  const generatedAt = new Date().toLocaleString();

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Latest News & Updates
          </h1>
          <p className="text-gray-600">
            <strong>Rendering:</strong> ISR (Incremental Static Regeneration) - 
            Static but updates every 60 seconds
          </p>
          <p className="text-sm text-blue-600 mt-2">
            📅 Page generated at: <strong>{generatedAt}</strong>
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {news.map((item) => (
            <Card key={item.id} hover={true}>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ISR Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              ⚡ How ISR Works
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>✅ Page is built statically (fast like SSG)</li>
              <li>✅ Automatically regenerates after 60 seconds</li>
              <li>✅ First visitor gets old page (instant)</li>
              <li>✅ Background regeneration happens</li>
              <li>✅ Next visitor gets fresh content</li>
            </ul>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100">
            <h3 className="text-lg font-bold text-green-900 mb-3">
              🎯 Best Use Cases
            </h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>✅ Blog posts & news articles</li>
              <li>✅ Product catalogs</li>
              <li>✅ Content that updates periodically</li>
              <li>✅ E-commerce product pages</li>
              <li>✅ Marketing landing pages</li>
            </ul>
          </Card>
        </div>

        {/* Refresh Notice */}
        <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg text-center">
          <p className="text-yellow-800 font-medium">
            💡 This page will automatically update with fresh content every 60 seconds. 
            Refresh your browser after a minute to see updated timestamp!
          </p>
        </div>
      </div>
    </div>
  );
}

// Simulated news fetch
async function fetchNews(): Promise<NewsItem[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const currentTime = new Date().toLocaleTimeString();
  
  return [
    {
      id: 1,
      title: "New Computer Science Program Launched",
      description: "We are excited to announce the launch of our new AI & Machine Learning specialization starting next semester.",
      date: currentTime,
      category: "Academic",
      icon: "🎓"
    },
    {
      id: 2,
      title: "Campus Infrastructure Upgrade",
      description: "State-of-the-art labs and smart classrooms are now operational across all departments.",
      date: currentTime,
      category: "Infrastructure",
      icon: "🏗️"
    },
    {
      id: 3,
      title: "Student Achievement Awards",
      description: "Our students won first place in the National Tech Competition 2025. Congratulations to the team!",
      date: currentTime,
      category: "Achievement",
      icon: "🏆"
    },
    {
      id: 4,
      title: "Industry Partnership Announcement",
      description: "Partnered with leading tech companies for internship and placement opportunities for our students.",
      date: currentTime,
      category: "Partnership",
      icon: "🤝"
    },
    {
      id: 5,
      title: "Sports Day 2025 Highlights",
      description: "Annual sports day was a huge success with record participation from all departments.",
      date: currentTime,
      category: "Events",
      icon: "⚽"
    },
    {
      id: 6,
      title: "Research Paper Published",
      description: "Faculty members published groundbreaking research in international journal on renewable energy.",
      date: currentTime,
      category: "Research",
      icon: "📚"
    }
  ];
}
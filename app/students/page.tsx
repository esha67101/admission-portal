// SSG Example

import Card from "@/components/ui/Card";

interface Student {
  id: number;
  name: string;
  program: string;
  year: string;
  gpa: string;
  image: string;
}

export default async function StudentsPage() {
  // Build time 
  const students = await fetchStudents();

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Our Students
          </h1>
          <p className="text-gray-600">
            <strong>Rendering:</strong> SSG (Static Site Generation) - 
            Built at build time, super fast!
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <Card key={student.id} hover={true}>
              {/* Student Image */}
              <div 
                className="h-48 rounded-lg mb-4 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
              >
                <div className="text-6xl">{student.image}</div>
              </div>

              {/* Student Info */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {student.name}
              </h3>
              <div className="space-y-1 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Program:</span> {student.program}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Year:</span> {student.year}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">GPA:</span> {student.gpa}
                </p>
              </div>

              {/* Badges */}
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Active
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Scholar
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-bold text-blue-900 mb-2">
            💡 About SSG (Static Site Generation)
          </h3>
          <p className="text-blue-800">
            This page is generated at build time and served as static HTML. 
            It's extremely fast because the content is pre-rendered. Perfect for 
            content that doesn't change frequently!
          </p>
        </div>
      </div>
    </div>
  );
}

// Static data fetch 
async function fetchStudents(): Promise<Student[]> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    { id: 1, name: "Ahmed Ali", program: "Computer Science", year: "3rd Year", gpa: "3.8", image: "👨‍💻" },
    { id: 2, name: "Fatima Khan", program: "Business Admin", year: "2nd Year", gpa: "3.9", image: "👩‍💼" },
    { id: 3, name: "Hassan Raza", program: "Engineering", year: "4th Year", gpa: "3.7", image: "👨‍🔧" },
    { id: 4, name: "Ayesha Malik", program: "Medicine", year: "1st Year", gpa: "4.0", image: "👩‍⚕️" },
    { id: 5, name: "Usman Tariq", program: "Computer Science", year: "2nd Year", gpa: "3.6", image: "👨‍💻" },
    { id: 6, name: "Zainab Ahmed", program: "Arts", year: "3rd Year", gpa: "3.8", image: "👩‍🎨" },
  ];
}
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center fade-in">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Start Your
          <span className="text-blue-600"> Academic Journey</span>
          <br />
          Today
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have transformed their futures through quality education. Apply now and take the first step towards success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/admission"
            className="btn-primary bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Apply for Admission
          </Link>
          <Link
            href="/about"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-blue-600"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card hover-lift">
            <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="card hover-lift">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="card hover-lift">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Faculty</div>
          </div>
        </div>
      </div>
    </section>
  );
}
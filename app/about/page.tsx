export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About EduPortal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering students to reach their full potential through quality education and innovative learning experiences.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 slide-in">
          <div 
            className="rounded-2xl overflow-hidden shadow-2xl h-96"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="card fade-in">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, high-quality education that prepares students for success in an ever-changing world. We believe in nurturing talent, fostering creativity, and building a foundation for lifelong learning.
            </p>
          </div>

          <div className="card fade-in">
            <div className="text-4xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a leading educational institution that transforms lives through innovative teaching methods, cutting-edge technology, and a commitment to excellence in every aspect of learning.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card text-center hover-lift">
              <div className="text-5xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Embracing new ideas and technologies</p>
            </div>

            <div className="card text-center hover-lift">
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-sm text-gray-600">Honesty in all our interactions</p>
            </div>

            <div className="card text-center hover-lift">
              <div className="text-5xl mb-3">🌟</div>
              <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">Striving for the highest standards</p>
            </div>

            <div className="card text-center hover-lift">
              <div className="text-5xl mb-3">🌍</div>
              <h3 className="font-semibold text-gray-800 mb-2">Diversity</h3>
              <p className="text-sm text-gray-600">Celebrating different perspectives</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="card bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Students Graduated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Faculty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Students Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 card hover-lift">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600 text-sm">Learn skills that are in demand in today's job market</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 card hover-lift">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Experienced Faculty</h3>
                <p className="text-gray-600 text-sm">Learn from professors with real-world experience</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 card hover-lift">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">State-of-the-Art Facilities</h3>
                <p className="text-gray-600 text-sm">Access modern labs, libraries, and learning spaces</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 card hover-lift">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Career Support</h3>
                <p className="text-gray-600 text-sm">Get guidance and placement assistance for your career</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
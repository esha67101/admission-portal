import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card hover-lift fade-in text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quality Education
              </h3>
              <p className="text-gray-600">
                Learn from industry experts and get hands-on experience with modern tools and technologies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card hover-lift fade-in text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quick Admission
              </h3>
              <p className="text-gray-600">
                Simple and fast admission process. Get started with your education journey in minutes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card hover-lift fade-in text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Career Support
              </h3>
              <p className="text-gray-600">
                Get placement assistance and career guidance to help you land your dream job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of learners and start your journey today!
          </p>
          <Link
            href="/admission"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
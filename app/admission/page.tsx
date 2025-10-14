import AdmissionForm from "@/components/AdmissionForm";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Apply for Admission
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your bright future. Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Image Banner */}
        <div className="mb-12 slide-in">
          <div 
            className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-80"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-gradient-to-r from-blue-900/80 to-transparent h-full flex items-center px-8">
              <div className="text-white max-w-xl">
                <h2 className="text-3xl font-bold mb-2">Your Future Starts Here</h2>
                <p className="text-lg opacity-90">Join a community of innovative learners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <AdmissionForm />

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="card text-center hover-lift">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 1: Apply</h3>
            <p className="text-gray-600 text-sm">Fill out the admission form with your details</p>
          </div>
          
          <div className="card text-center hover-lift">
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 2: Review</h3>
            <p className="text-gray-600 text-sm">Our team reviews your application</p>
          </div>
          
          <div className="card text-center hover-lift">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 3: Enroll</h3>
            <p className="text-gray-600 text-sm">Get accepted and start your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
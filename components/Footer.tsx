import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="slide-in">
            <h3 className="text-white text-lg font-semibold mb-4">
              📚 EduPortal
            </h3>
            <p className="text-sm text-gray-400">
              Your gateway to quality education. We help students achieve their academic dreams through a seamless admission process.
            </p>
          </div>

          {/* Quick Links */}
          <div className="slide-in">
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-sm hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/admission" 
                  className="text-sm hover:text-blue-400 transition-colors duration-300"
                >
                  Apply for Admission
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="slide-in">
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>admission@eduportal.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 EduPortal. All rights reserved. Built with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
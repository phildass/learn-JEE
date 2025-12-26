import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo placeholder - will be replaced with actual logo when uploaded to public/images/ */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white text-xl font-bold">🎓</span>
            </div>
            {/* Uncomment when logo is available: */}
            {/* <img src="/images/logo.png" alt="Learn JEE" className="h-10 w-auto" /> */}
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
                Learn JEE
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">Master Your Path to IIT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link to="/about-jee" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium">
              About JEE
            </Link>
            <Link to="/mental-makeup" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium">
              Mental Make-Up
            </Link>
            
            {/* Modules Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium flex items-center gap-1">
                Modules
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white rounded-xl shadow-soft-lg mt-1 py-2 w-60 border border-gray-100">
                <Link to="/modules/foundation-builder" className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 transition">
                  Foundation Builder
                </Link>
                <Link to="/modules/advanced-integrator" className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 transition">
                  Advanced Integrator
                </Link>
                <Link to="/modules/masterclass" className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 transition">
                  Masterclass
                </Link>
                <Link to="/modules/practice-engine" className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 transition">
                  Practice Engine
                </Link>
                <Link to="/modules/simulated-exam-hub" className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 transition">
                  Simulated Exam Hub
                </Link>
                <Link to="/modules/pyq-vault" className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 transition">
                  PYQ Vault
                </Link>
                <Link to="/modules/final-polish" className="block px-4 py-2.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 transition">
                  Final Polish
                </Link>
              </div>
            </div>

            <Link to="/mock-tests" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium">
              Mock Tests
            </Link>
            <Link to="/revision" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium">
              Revision
            </Link>
            <Link to="/analytics" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition font-medium">
              Analytics
            </Link>
            <Link 
              to="/contact" 
              className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition shadow-md hover:shadow-lg font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1 border-t border-gray-200 pt-4">
            <Link to="/" className="block py-2.5 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link to="/about-jee" className="block py-2.5 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition font-medium">
              About JEE
            </Link>
            <Link to="/mental-makeup" className="block py-2.5 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition font-medium">
              Mental Make-Up
            </Link>
            <div className="pl-4 space-y-1 mt-2">
              <p className="font-semibold text-sm text-gray-500 px-4 mb-2">Modules</p>
              <Link to="/modules/foundation-builder" className="block py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                Foundation Builder
              </Link>
              <Link to="/modules/advanced-integrator" className="block py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                Advanced Integrator
              </Link>
              <Link to="/modules/masterclass" className="block py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                Masterclass
              </Link>
              <Link to="/modules/practice-engine" className="block py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                Practice Engine
              </Link>
              <Link to="/modules/simulated-exam-hub" className="block py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                Simulated Exam Hub
              </Link>
              <Link to="/modules/pyq-vault" className="block py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                PYQ Vault
              </Link>
              <Link to="/modules/final-polish" className="block py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                Final Polish
              </Link>
            </div>
            <Link to="/mock-tests" className="block py-2.5 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition font-medium">
              Mock Tests
            </Link>
            <Link to="/revision" className="block py-2.5 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition font-medium">
              Revision
            </Link>
            <Link to="/analytics" className="block py-2.5 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition font-medium">
              Analytics
            </Link>
            <Link to="/contact" className="block py-2.5 px-4 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-medium shadow-md">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

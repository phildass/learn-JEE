import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="mr-2">🎓</span>
            <span>JEE Prep Master</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/about-jee" className="hover:text-blue-200 transition">About JEE</Link>
            <Link to="/mental-makeup" className="hover:text-blue-200 transition">Mental Make-Up</Link>
            
            {/* Modules Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-200 transition flex items-center">
                Modules
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg mt-2 py-2 w-56">
                <Link to="/modules/foundation-builder" className="block px-4 py-2 hover:bg-blue-50">Foundation Builder</Link>
                <Link to="/modules/advanced-integrator" className="block px-4 py-2 hover:bg-blue-50">Advanced Integrator</Link>
                <Link to="/modules/masterclass" className="block px-4 py-2 hover:bg-blue-50">Masterclass</Link>
                <Link to="/modules/practice-engine" className="block px-4 py-2 hover:bg-blue-50">Practice Engine</Link>
                <Link to="/modules/simulated-exam-hub" className="block px-4 py-2 hover:bg-blue-50">Simulated Exam Hub</Link>
                <Link to="/modules/pyq-vault" className="block px-4 py-2 hover:bg-blue-50">PYQ Vault</Link>
                <Link to="/modules/final-polish" className="block px-4 py-2 hover:bg-blue-50">Final Polish</Link>
              </div>
            </div>

            <Link to="/mock-tests" className="hover:text-blue-200 transition">Mock Tests</Link>
            <Link to="/revision" className="hover:text-blue-200 transition">Revision</Link>
            <Link to="/analytics" className="hover:text-blue-200 transition">Analytics</Link>
            <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-blue-200">Home</Link>
            <Link to="/about-jee" className="block py-2 hover:text-blue-200">About JEE</Link>
            <Link to="/mental-makeup" className="block py-2 hover:text-blue-200">Mental Make-Up</Link>
            <div className="pl-4 space-y-2">
              <p className="font-semibold">Modules:</p>
              <Link to="/modules/foundation-builder" className="block py-1 hover:text-blue-200">Foundation Builder</Link>
              <Link to="/modules/advanced-integrator" className="block py-1 hover:text-blue-200">Advanced Integrator</Link>
              <Link to="/modules/masterclass" className="block py-1 hover:text-blue-200">Masterclass</Link>
              <Link to="/modules/practice-engine" className="block py-1 hover:text-blue-200">Practice Engine</Link>
              <Link to="/modules/simulated-exam-hub" className="block py-1 hover:text-blue-200">Simulated Exam Hub</Link>
              <Link to="/modules/pyq-vault" className="block py-1 hover:text-blue-200">PYQ Vault</Link>
              <Link to="/modules/final-polish" className="block py-1 hover:text-blue-200">Final Polish</Link>
            </div>
            <Link to="/mock-tests" className="block py-2 hover:text-blue-200">Mock Tests</Link>
            <Link to="/revision" className="block py-2 hover:text-blue-200">Revision</Link>
            <Link to="/analytics" className="block py-2 hover:text-blue-200">Analytics</Link>
            <Link to="/contact" className="block py-2 hover:text-blue-200">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">🎓</span>
              </div>
              <h3 className="text-white text-xl font-display font-bold">Learn JEE</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your comprehensive platform for JEE Main and Advanced preparation.
              Master Physics, Chemistry, and Mathematics with structured modules.
            </p>
            
            {/* Branding Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/iiskills.png" 
                  alt="Indian Institute of Professional Skills Development" 
                  className="h-6 w-auto opacity-80"
                />
                <span className="text-xs text-gray-400">
                  Indian Institute of Professional Skills Development
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="/images/ai-cloud.png" 
                  alt="AI Cloud Enterprises" 
                  className="h-6 w-auto opacity-80"
                />
                <span className="text-xs text-gray-400">
                  AI Cloud Enterprises
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-blue-500">→</span> Home
              </Link></li>
              <li><Link to="/about-jee" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-blue-500">→</span> About JEE
              </Link></li>
              <li><Link to="/mock-tests" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-blue-500">→</span> Mock Tests
              </Link></li>
              <li><Link to="/revision" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-blue-500">→</span> Revision
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-4 text-lg">Modules</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/modules/foundation-builder" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-purple-500">→</span> Foundation Builder
              </Link></li>
              <li><Link to="/modules/practice-engine" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-purple-500">→</span> Practice Engine
              </Link></li>
              <li><Link to="/modules/pyq-vault" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-purple-500">→</span> PYQ Vault
              </Link></li>
              <li><Link to="/modules/final-polish" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-purple-500">→</span> Final Polish
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/analytics" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-green-500">→</span> Analytics Dashboard
              </Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-green-500">→</span> About Us
              </Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-green-500">→</span> Contact
              </Link></li>
              <li><Link to="/mental-makeup" className="hover:text-blue-400 transition flex items-center gap-2">
                <span className="text-green-500">→</span> Mental Make-Up
              </Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Learn JEE. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Empowering students to achieve their engineering dreams.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

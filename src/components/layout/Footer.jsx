import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">JEE Prep Master</h3>
            <p className="text-sm">
              Your comprehensive platform for JEE Main and Advanced preparation.
              Master Physics, Chemistry, and Mathematics with structured modules.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about-jee" className="hover:text-blue-400 transition">About JEE</Link></li>
              <li><Link to="/mock-tests" className="hover:text-blue-400 transition">Mock Tests</Link></li>
              <li><Link to="/revision" className="hover:text-blue-400 transition">Revision</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Modules</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/modules/foundation-builder" className="hover:text-blue-400 transition">Foundation Builder</Link></li>
              <li><Link to="/modules/practice-engine" className="hover:text-blue-400 transition">Practice Engine</Link></li>
              <li><Link to="/modules/pyq-vault" className="hover:text-blue-400 transition">PYQ Vault</Link></li>
              <li><Link to="/modules/final-polish" className="hover:text-blue-400 transition">Final Polish</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/analytics" className="hover:text-blue-400 transition">Analytics Dashboard</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JEE Prep Master. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Empowering students to achieve their engineering dreams.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

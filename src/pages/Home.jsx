import { Link } from 'react-router-dom';

function Home() {
  const modules = [
    {
      title: 'Foundation Builder',
      icon: '🏗️',
      description: 'Build strong fundamentals in Physics, Chemistry, and Mathematics',
      duration: '3-4 months',
      link: '/modules/foundation-builder'
    },
    {
      title: 'Advanced Integrator',
      icon: '🎯',
      description: 'Master advanced concepts and problem-solving techniques',
      duration: '2-3 months',
      link: '/modules/advanced-integrator'
    },
    {
      title: 'Masterclass',
      icon: '⭐',
      description: 'Deep dive into JEE Advanced level topics',
      duration: '2-3 months',
      link: '/modules/masterclass'
    },
    {
      title: 'Practice Engine',
      icon: '💪',
      description: 'Solve topic-wise DPPs with instant feedback',
      duration: 'Ongoing',
      link: '/modules/practice-engine'
    },
    {
      title: 'Simulated Exam Hub',
      icon: '📝',
      description: 'Full-length mock tests in actual exam format',
      duration: 'Regular',
      link: '/modules/simulated-exam-hub'
    },
    {
      title: 'PYQ Vault',
      icon: '📚',
      description: 'Access past year questions with detailed solutions',
      duration: 'Comprehensive',
      link: '/modules/pyq-vault'
    },
    {
      title: 'Final Polish',
      icon: '✨',
      description: 'Last-minute revision and exam strategies',
      duration: '2-4 weeks',
      link: '/modules/final-polish'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master JEE with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive online preparation for JEE Main and Advanced
            </p>
            <p className="text-lg mb-10 text-blue-50">
              Structured modules, practice questions, mock tests, and analytics to help you crack one of India's toughest exams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/modules/foundation-builder" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
              >
                Start Learning
              </Link>
              <Link 
                to="/about-jee" 
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition border-2 border-white"
              >
                About JEE Exams
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose JEE Prep Master?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A complete, automated learning platform designed specifically for JEE aspirants
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Analytics</h3>
              <p className="text-gray-600">
                Track your progress with detailed performance analytics. Identify strengths and weaknesses across topics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Structured Learning</h3>
              <p className="text-gray-600">
                Follow a carefully designed curriculum that covers the entire JEE syllabus systematically.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Practice & Feedback</h3>
              <p className="text-gray-600">
                Get instant feedback on practice questions with detailed solutions and explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Learning Modules
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Seven comprehensive modules designed to take you from basics to advanced level
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <Link 
                key={index}
                to={module.link}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{module.title}</h3>
                <p className="text-gray-600 mb-3">{module.description}</p>
                <p className="text-sm text-blue-600 font-semibold">Duration: {module.duration}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your JEE Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students preparing for JEE with our comprehensive platform
          </p>
          <Link 
            to="/modules/foundation-builder" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition inline-block shadow-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Learning Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Practice Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Mock Tests</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

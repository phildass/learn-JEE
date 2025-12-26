import { Link } from 'react-router-dom';

function Masterclass() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">⭐</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Masterclass</h1>
            <p className="text-xl text-purple-100 mb-6">
              Deep dive into JEE Advanced level topics and olympiad-style problems
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Duration:</span> 2-3 months
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Level:</span> Advanced (JEE Advanced)
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Module Overview</h2>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <p className="text-lg text-gray-700 mb-4">
              The Masterclass module is designed for serious JEE Advanced aspirants. Tackle the toughest problems, learn advanced tricks, and develop intuition for complex multi-concept questions.
            </p>
            <p className="text-gray-700">
              <strong>Key Focus:</strong> JEE Advanced patterns, multi-concept integration, advanced problem-solving strategies, time optimization
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Advanced Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3">Physics Excellence</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced mechanics and rotational dynamics</li>
                <li>• Electromagnetism with calculus</li>
                <li>• Wave mechanics and quantum physics</li>
                <li>• Multi-concept integration problems</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3">Chemistry Mastery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced organic synthesis</li>
                <li>• Transition metal chemistry</li>
                <li>• Chemical equilibrium applications</li>
                <li>• Reaction mechanism strategies</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3">Mathematics Proficiency</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advanced calculus applications</li>
                <li>• Complex numbers and geometry</li>
                <li>• Inequality and functional equations</li>
                <li>• Advanced coordinate geometry</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3">Problem-Solving Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pattern recognition techniques</li>
                <li>• Short-cut methods and tricks</li>
                <li>• Multi-step problem approach</li>
                <li>• Exam strategy and time management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <p className="mb-6">
            Continue practicing with our Practice Engine and take mock tests regularly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/modules/practice-engine" className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50">
              Practice Engine →
            </Link>
            <Link to="/modules/simulated-exam-hub" className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50">
              Mock Tests →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Masterclass;

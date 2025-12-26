import { Link } from 'react-router-dom';

function AdvancedIntegrator() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">🎯</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Advanced Integrator</h1>
            <p className="text-xl text-indigo-100 mb-6">
              Master advanced concepts and develop problem-solving techniques for JEE Main
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Duration:</span> 2-3 months
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Level:</span> Intermediate to Advanced
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Module Overview</h2>
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
            <p className="text-lg text-gray-700 mb-4">
              Build on your foundation to master advanced topics and problem-solving strategies. This module focuses on JEE Main level complexity with integration of multiple concepts.
            </p>
            <p className="text-gray-700">
              <strong>Key Focus:</strong> Advanced numericals, concept integration, time-bound problem solving, JEE Main patterns
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Advanced Physics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Electromagnetism in depth</li>
                <li>• Modern Physics concepts</li>
                <li>• Complex mechanics problems</li>
                <li>• Wave optics and interference</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Advanced Chemistry</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Organic reaction mechanisms</li>
                <li>• Coordination chemistry</li>
                <li>• Chemical kinetics in depth</li>
                <li>• Advanced electrochemistry</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Advanced Mathematics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Differential equations</li>
                <li>• 3D geometry and vectors</li>
                <li>• Advanced calculus</li>
                <li>• Probability and statistics</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Continue Your Journey</h2>
          <p className="mb-6">
            Master these advanced concepts before moving to JEE Advanced level preparation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/modules/foundation-builder" className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50">
              ← Foundation Builder
            </Link>
            <Link to="/modules/masterclass" className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50">
              Masterclass →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdvancedIntegrator;

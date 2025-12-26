import { Link } from 'react-router-dom';

function SimulatedExamHub() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">📝</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simulated Exam Hub</h1>
            <p className="text-xl text-green-100 mb-6">
              Full-length mock tests in actual JEE exam format with detailed analytics
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Available Mock Tests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3">JEE Main Full Tests</h3>
              <p className="text-gray-700 mb-4">
                Complete mock tests following the latest JEE Main pattern with 75 questions in 3 hours.
              </p>
              <Link to="/mock-tests" className="text-green-600 font-semibold hover:text-green-700">
                View Tests →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
              <h3 className="text-xl font-bold mb-3">JEE Advanced Full Tests</h3>
              <p className="text-gray-700 mb-4">
                Two paper format following JEE Advanced pattern with detailed solutions.
              </p>
              <Link to="/mock-tests" className="text-teal-600 font-semibold hover:text-teal-700">
                View Tests →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-xl font-bold mb-2">Timed Tests</h3>
              <p className="text-gray-700">Actual exam duration with countdown timer</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2">Detailed Analysis</h3>
              <p className="text-gray-700">Performance metrics and topic-wise breakdown</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold mb-2">Solutions</h3>
              <p className="text-gray-700">Step-by-step solutions for all questions</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SimulatedExamHub;

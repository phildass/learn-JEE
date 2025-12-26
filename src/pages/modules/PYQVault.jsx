import { Link } from 'react-router-dom';

function PYQVault() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">PYQ Vault</h1>
            <p className="text-xl text-orange-100 mb-6">
              Complete collection of Previous Year Questions with detailed solutions
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Question Collections</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold mb-4">JEE Main PYQs</h3>
              <p className="text-gray-700 mb-4">Questions from past 10+ years of JEE Main</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <span className="text-orange-600 mr-2">✓</span>
                  Topic-wise organization
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-orange-600 mr-2">✓</span>
                  Detailed solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-orange-600 mr-2">✓</span>
                  Difficulty levels marked
                </li>
              </ul>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
                Browse Questions
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4">JEE Advanced PYQs</h3>
              <p className="text-gray-700 mb-4">Questions from past 10+ years of JEE Advanced</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <span className="text-red-600 mr-2">✓</span>
                  Year-wise and topic-wise sorting
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-red-600 mr-2">✓</span>
                  Comprehensive explanations
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-red-600 mr-2">✓</span>
                  Multiple solving approaches
                </li>
              </ul>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
                Browse Questions
              </button>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Practice PYQs?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📌</span>
                  <div>
                    <strong>Understand Exam Patterns:</strong> Recognize frequently asked topics and question types
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎯</span>
                  <div>
                    <strong>Build Confidence:</strong> Familiarity with actual exam questions reduces anxiety
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">⚡</span>
                  <div>
                    <strong>Improve Speed:</strong> Practice under timed conditions to enhance solving speed
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💪</span>
                  <div>
                    <strong>Identify Weak Areas:</strong> Pinpoint topics that need more attention
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PYQVault;

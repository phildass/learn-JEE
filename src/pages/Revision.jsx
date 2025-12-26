import { Link } from 'react-router-dom';

function Revision() {
  const revisionResources = [
    {
      subject: 'Physics',
      topics: [
        'Important Formulas Sheet',
        'Quick Concept Review',
        'Common Mistakes to Avoid',
        'Previous Year Analysis'
      ]
    },
    {
      subject: 'Chemistry',
      topics: [
        'Reaction Mechanisms Summary',
        'Important Name Reactions',
        'Periodic Table Trends',
        'Organic Chemistry Flowcharts'
      ]
    },
    {
      subject: 'Mathematics',
      topics: [
        'Formula Reference Guide',
        'Important Theorems',
        'Shortcut Methods',
        'Common Integration Formulas'
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">📖</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Revision Module</h1>
            <p className="text-xl text-teal-100">
              Quick revision notes and strategies for effective exam preparation
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Revision Resources</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {revisionResources.map((resource, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{resource.subject}</h3>
                <ul className="space-y-2">
                  {resource.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Effective Revision Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-teal-900">Active Recall</h3>
              <p className="text-gray-700">
                Test yourself frequently without looking at notes. This strengthens memory and identifies weak areas.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-cyan-900">Spaced Repetition</h3>
              <p className="text-gray-700">
                Review topics at increasing intervals: day 1, day 3, day 7, day 14. This optimizes long-term retention.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Make Summary Notes</h3>
              <p className="text-gray-700">
                Create concise one-page summaries for each chapter with key formulas, concepts, and tricks.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-indigo-900">Practice PYQs</h3>
              <p className="text-gray-700">
                Solve previous year questions to understand exam patterns and frequently asked topics.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need More Practice?</h2>
          <p className="mb-6">
            Access our practice engine for topic-wise problems or take full-length mock tests.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/modules/practice-engine" 
              className="bg-white text-teal-600 px-6 py-2 rounded-lg hover:bg-teal-50 transition"
            >
              Practice Engine
            </Link>
            <Link 
              to="/mock-tests" 
              className="bg-white text-teal-600 px-6 py-2 rounded-lg hover:bg-teal-50 transition"
            >
              Mock Tests
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Revision;

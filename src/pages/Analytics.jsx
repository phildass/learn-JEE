import { useState } from 'react';

function Analytics() {
  // Sample analytics data
  const [subjectScores] = useState({
    physics: { attempted: 150, correct: 110, percentage: 73 },
    chemistry: { attempted: 140, correct: 120, percentage: 86 },
    mathematics: { attempted: 160, correct: 100, percentage: 63 }
  });

  const [topicStrength] = useState([
    { topic: 'Mechanics', subject: 'Physics', strength: 85, status: 'Strong' },
    { topic: 'Organic Chemistry', subject: 'Chemistry', strength: 90, status: 'Strong' },
    { topic: 'Calculus', subject: 'Mathematics', strength: 70, status: 'Moderate' },
    { topic: 'Electromagnetism', subject: 'Physics', strength: 55, status: 'Weak' },
    { topic: 'Coordination Chemistry', subject: 'Chemistry', strength: 75, status: 'Moderate' },
    { topic: 'Trigonometry', subject: 'Mathematics', strength: 80, status: 'Strong' }
  ]);

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">📊</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Analytics Dashboard</h1>
            <p className="text-xl text-indigo-100">
              Track your performance and identify areas for improvement
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overall Performance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Overall Performance</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Physics</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">{subjectScores.physics.percentage}%</div>
              <p className="text-gray-700">
                {subjectScores.physics.correct} / {subjectScores.physics.attempted} correct
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-2 text-green-900">Chemistry</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">{subjectScores.chemistry.percentage}%</div>
              <p className="text-gray-700">
                {subjectScores.chemistry.correct} / {subjectScores.chemistry.attempted} correct
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold mb-2 text-purple-900">Mathematics</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">{subjectScores.mathematics.percentage}%</div>
              <p className="text-gray-700">
                {subjectScores.mathematics.correct} / {subjectScores.mathematics.attempted} correct
              </p>
            </div>
          </div>
        </section>

        {/* Topic-wise Strength */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Topic-wise Strength Analysis</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Strength</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {topicStrength.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">{item.topic}</td>
                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className={`h-2 rounded-full ${
                              item.strength >= 75 ? 'bg-green-600' : 
                              item.strength >= 60 ? 'bg-yellow-600' : 
                              'bg-red-600'
                            }`}
                            style={{ width: `${item.strength}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold">{item.strength}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === 'Strong' ? 'bg-green-100 text-green-800' :
                        item.status === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendations */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold mb-3 text-red-900">Focus Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Electromagnetism (Physics) - 55% strength</li>
                <li>• Calculus (Mathematics) - 63% strength</li>
                <li>• Review weak topics with additional practice</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-900">Strengths</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Organic Chemistry - 90% strength</li>
                <li>• Mechanics - 85% strength</li>
                <li>• Maintain momentum with regular practice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-700">
              <strong>Note:</strong> This is a demo analytics dashboard. Complete practice questions and mock tests to generate real performance analytics based on your attempts.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Analytics;

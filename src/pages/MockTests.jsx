import { Link } from 'react-router-dom';

function MockTests() {
  const mockTests = [
    {
      name: 'JEE Main Mock Test 1',
      questions: 75,
      duration: '3 hours',
      difficulty: 'Medium',
      type: 'JEE Main'
    },
    {
      name: 'JEE Main Mock Test 2',
      questions: 75,
      duration: '3 hours',
      difficulty: 'Medium-Hard',
      type: 'JEE Main'
    },
    {
      name: 'JEE Advanced Mock - Paper 1',
      questions: 54,
      duration: '3 hours',
      difficulty: 'Hard',
      type: 'JEE Advanced'
    },
    {
      name: 'JEE Advanced Mock - Paper 2',
      questions: 54,
      duration: '3 hours',
      difficulty: 'Hard',
      type: 'JEE Advanced'
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Mock Tests</h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            Full-length mock tests to simulate actual JEE exam conditions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Available Tests</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mockTests.map((test, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{test.name}</h3>
                <div className="space-y-2 text-gray-700 mb-4">
                  <p><strong>Questions:</strong> {test.questions}</p>
                  <p><strong>Duration:</strong> {test.duration}</p>
                  <p><strong>Difficulty:</strong> {test.difficulty}</p>
                  <p><strong>Type:</strong> {test.type}</p>
                </div>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition w-full">
                  Start Test
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Test Instructions</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Tests simulate actual JEE exam conditions</li>
            <li>• Timer will start automatically when you begin</li>
            <li>• Questions cannot be revisited after submission</li>
            <li>• Detailed solutions available after completion</li>
            <li>• Performance analytics will be generated automatically</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MockTests;

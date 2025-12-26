import { Link } from 'react-router-dom';

function FoundationBuilder() {
  const topics = [
    {
      subject: 'Physics',
      chapters: [
        'Units and Measurements',
        'Kinematics',
        'Laws of Motion',
        'Work, Energy and Power',
        'Rotational Motion',
        'Gravitation',
        'Properties of Matter',
        'Thermodynamics Basics',
        'Oscillations and Waves'
      ]
    },
    {
      subject: 'Chemistry',
      chapters: [
        'Basic Concepts of Chemistry',
        'Atomic Structure',
        'Chemical Bonding',
        'States of Matter',
        'Thermodynamics',
        'Equilibrium',
        'Redox Reactions',
        'Periodic Classification',
        'Hydrogen and s-Block Elements'
      ]
    },
    {
      subject: 'Mathematics',
      chapters: [
        'Sets, Relations and Functions',
        'Complex Numbers',
        'Quadratic Equations',
        'Sequences and Series',
        'Permutations and Combinations',
        'Binomial Theorem',
        'Coordinate Geometry Basics',
        'Trigonometry',
        'Mathematical Reasoning'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">🏗️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Foundation Builder</h1>
            <p className="text-xl text-blue-100 mb-6">
              Build rock-solid fundamentals across Physics, Chemistry, and Mathematics
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Duration:</span> 3-4 months
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Level:</span> Beginner to Intermediate
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Focus:</span> NCERT + Basics
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Module Overview</h2>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 mb-4">
              The Foundation Builder module is designed to help you master the fundamental concepts that form the backbone of JEE preparation. This module covers NCERT-level topics in depth and introduces basic problem-solving techniques.
            </p>
            <p className="text-gray-700">
              <strong>Key Focus Areas:</strong> Conceptual understanding, NCERT mastery, basic numericals, theory clarity
            </p>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Learning Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">Week 1-2: Theory</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Read NCERT chapters thoroughly</li>
                <li>• Understand definitions and theorems</li>
                <li>• Make concise notes</li>
                <li>• Watch concept videos</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
              <h3 className="text-xl font-bold mb-3">Week 3: Practice</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Solve NCERT exercises</li>
                <li>• Practice basic numericals</li>
                <li>• Attempt chapter-wise DPPs</li>
                <li>• Clear doubts immediately</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3">Week 4: Revision</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Quick theory revision</li>
                <li>• Solve mixed problems</li>
                <li>• Take chapter tests</li>
                <li>• Identify weak areas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Syllabus Coverage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Syllabus Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{topic.subject}</h3>
                <ul className="space-y-2">
                  {topic.chapters.map((chapter, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{chapter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Study Tips for This Module</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Do's ✅</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complete NCERT thoroughly before moving to other books</li>
                  <li>• Solve all NCERT examples and exercises</li>
                  <li>• Make formula sheets for quick revision</li>
                  <li>• Practice daily, even if for 1-2 hours</li>
                  <li>• Clear doubts on the same day</li>
                  <li>• Take regular breaks to avoid burnout</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Don'ts ❌</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Don't skip theory to solve problems directly</li>
                  <li>• Don't jump to advanced topics too quickly</li>
                  <li>• Don't compare your progress with others</li>
                  <li>• Don't accumulate doubts for later</li>
                  <li>• Don't rely solely on solutions without trying</li>
                  <li>• Don't neglect any subject or topic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Practice Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">📝 Daily Practice Problems (DPPs)</h3>
              <p className="text-gray-700 mb-4">
                Access topic-wise daily practice problems with instant feedback and detailed solutions.
              </p>
              <Link 
                to="/modules/practice-engine" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-700 transition"
              >
                Start Practicing
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Track Your Progress</h3>
              <p className="text-gray-700 mb-4">
                Monitor your performance across topics and identify areas that need more attention.
              </p>
              <Link 
                to="/analytics" 
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg inline-block hover:bg-indigo-700 transition"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready for the Next Level?</h2>
          <p className="mb-6">
            Once you've mastered the fundamentals, move on to the Advanced Integrator module to tackle more complex problems and concepts.
          </p>
          <Link 
            to="/modules/advanced-integrator" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Go to Advanced Integrator →
          </Link>
        </section>
      </div>
    </div>
  );
}

export default FoundationBuilder;

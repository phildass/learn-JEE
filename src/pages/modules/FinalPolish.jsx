import { Link } from 'react-router-dom';

function FinalPolish() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">✨</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Final Polish</h1>
            <p className="text-xl text-yellow-100 mb-6">
              Last-minute revision strategies and exam day preparation
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <span className="font-semibold">Duration:</span> 2-4 weeks before exam
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Module Focus</h2>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <p className="text-lg text-gray-700 mb-4">
              The Final Polish module is designed for the crucial last few weeks before your JEE exam. Focus on rapid revision, formula consolidation, and exam strategies.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Revision Strategy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-600">
              <h3 className="text-xl font-bold mb-3">Week 1</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Quick formula revision</li>
                <li>• Important theorems</li>
                <li>• Reaction mechanisms</li>
                <li>• Key concepts summary</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600">
              <h3 className="text-xl font-bold mb-3">Week 2-3</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Solve previous year papers</li>
                <li>• Take full-length mocks</li>
                <li>• Analyze mistakes</li>
                <li>• Time management practice</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-600">
              <h3 className="text-xl font-bold mb-3">Last Week</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Light revision only</li>
                <li>• Maintain health & sleep</li>
                <li>• Exam day preparation</li>
                <li>• Confidence building</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Exam Day Tips</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Before the Exam</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Get 7-8 hours of sleep</li>
                  <li>✓ Eat a healthy breakfast</li>
                  <li>✓ Reach center 30 mins early</li>
                  <li>✓ Carry all required documents</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">During the Exam</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Read instructions carefully</li>
                  <li>✓ Attempt easy questions first</li>
                  <li>✓ Manage time per section</li>
                  <li>✓ Stay calm and focused</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Access Revision Resources</h2>
          <p className="mb-6">
            Use our quick revision notes and formula sheets for last-minute preparation.
          </p>
          <Link 
            to="/revision" 
            className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition inline-block"
          >
            Go to Revision Module →
          </Link>
        </section>
      </div>
    </div>
  );
}

export default FinalPolish;

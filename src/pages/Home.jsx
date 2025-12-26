import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🎓 Learn JEE - Master Your Path to IIT
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              A comprehensive, structured learning platform for JEE Main and Advanced preparation
            </p>
            <p className="text-lg mb-8 text-blue-50 max-w-3xl">
              Seven curated modules covering Physics, Chemistry, and Mathematics with practice problems, mock tests, previous year questions, and performance analytics to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="#getting-started" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
              >
                Get Started
              </Link>
              <Link 
                to="/about-jee" 
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white"
              >
                About JEE
              </Link>
              <Link 
                to="/mental-makeup" 
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition border-2 border-white"
              >
                Mental Preparation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50 border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">📋 Table of Contents</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
                <ul className="space-y-1 text-blue-600">
                  <li><a href="#getting-started" className="hover:underline">→ Quick Start Guide</a></li>
                  <li><Link to="/about-jee" className="hover:underline">→ About JEE Exams</Link></li>
                  <li><Link to="/mental-makeup" className="hover:underline">→ Mental Make-Up</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Learning Modules</h3>
                <ul className="space-y-1 text-blue-600">
                  <li><a href="#modules" className="hover:underline">→ 7 Core Modules</a></li>
                  <li><Link to="/modules/practice-engine" className="hover:underline">→ Practice Engine</Link></li>
                  <li><Link to="/modules/pyq-vault" className="hover:underline">→ PYQ Vault</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
                <ul className="space-y-1 text-blue-600">
                  <li><Link to="/mock-tests" className="hover:underline">→ Mock Tests</Link></li>
                  <li><Link to="/revision" className="hover:underline">→ Revision & Strategy</Link></li>
                  <li><Link to="/analytics" className="hover:underline">→ Analytics Dashboard</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">🚀 Getting Started</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Start Your JEE Journey</h3>
              <p className="text-gray-700 mb-4">
                Follow these steps to begin your systematic JEE preparation:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Step 1:</strong> Read the <Link to="/about-jee" className="text-blue-600 hover:underline">About JEE</Link> page to understand exam structure and patterns</li>
                <li><strong>Step 2:</strong> Start with <Link to="/modules/foundation-builder" className="text-blue-600 hover:underline">Foundation Builder</Link> to build strong fundamentals</li>
                <li><strong>Step 3:</strong> Practice daily using the <Link to="/modules/practice-engine" className="text-blue-600 hover:underline">Practice Engine</Link> with instant feedback</li>
                <li><strong>Step 4:</strong> Take regular <Link to="/mock-tests" className="text-blue-600 hover:underline">Mock Tests</Link> to track progress</li>
                <li><strong>Step 5:</strong> Monitor your performance via <Link to="/analytics" className="text-blue-600 hover:underline">Analytics Dashboard</Link></li>
              </ol>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-lg font-bold mb-2">Prerequisites</h3>
                <p className="text-gray-700 text-sm">Class 11-12 PCM background. Dedication and consistency are key to success.</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="text-lg font-bold mb-2">Time Commitment</h3>
                <p className="text-gray-700 text-sm">6-8 hours daily recommended. Follow structured 12-18 month preparation plan.</p>
              </div>
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-bold mb-2">Goal Setting</h3>
                <p className="text-gray-700 text-sm">Set realistic targets. Focus on understanding concepts, not just solving problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path / Modules Section */}
      <section id="modules" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">📖 Learning Modules</h2>
            <p className="text-lg text-gray-600 mb-8">
              Seven comprehensive modules designed to take you from basics to JEE Advanced level
            </p>
            
            <div className="space-y-4">
              {/* Module 1 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏗️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Foundation Builder</h3>
                    <p className="text-gray-700 mb-3">
                      Master NCERT-level concepts in Physics, Chemistry, and Mathematics. Build strong fundamentals with theory, examples, and exercises.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Duration: 3-4 months</span>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">Level: Beginner</span>
                      <Link to="/modules/foundation-builder" className="text-blue-600 hover:underline font-semibold">
                        Start Module →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎯</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Advanced Integrator</h3>
                    <p className="text-gray-700 mb-3">
                      Progress to JEE Main level complexity. Integrate concepts across topics and develop problem-solving strategies.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Duration: 2-3 months</span>
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Level: Intermediate</span>
                      <Link to="/modules/advanced-integrator" className="text-blue-600 hover:underline font-semibold">
                        Start Module →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⭐</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Masterclass</h3>
                    <p className="text-gray-700 mb-3">
                      Tackle JEE Advanced level problems. Master multi-concept integration and develop intuition for complex questions.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Duration: 2-3 months</span>
                      <span className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-full">Level: Advanced</span>
                      <Link to="/modules/masterclass" className="text-blue-600 hover:underline font-semibold">
                        Start Module →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💪</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Practice Engine</h3>
                    <p className="text-gray-700 mb-3">
                      Daily Practice Problems (DPPs) with instant feedback and detailed solutions. Track progress topic-wise.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Duration: Ongoing</span>
                      <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Interactive</span>
                      <Link to="/modules/practice-engine" className="text-blue-600 hover:underline font-semibold">
                        Start Practicing →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 5 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📝</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5. Simulated Exam Hub</h3>
                    <p className="text-gray-700 mb-3">
                      Full-length mock tests in actual JEE format. Build exam temperament and time management skills.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Regular Tests</span>
                      <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Timed</span>
                      <Link to="/modules/simulated-exam-hub" className="text-blue-600 hover:underline font-semibold">
                        Take Mock Test →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 6 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📚</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">6. PYQ Vault</h3>
                    <p className="text-gray-700 mb-3">
                      10+ years of Previous Year Questions from JEE Main and Advanced with comprehensive solutions.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">1000+ Questions</span>
                      <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Topic-wise</span>
                      <Link to="/modules/pyq-vault" className="text-blue-600 hover:underline font-semibold">
                        Browse PYQs →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 7 */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">✨</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">7. Final Polish</h3>
                    <p className="text-gray-700 mb-3">
                      Last-minute revision with formula sheets, quick summaries, and exam day strategies.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Duration: 2-4 weeks</span>
                      <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full">Pre-Exam</span>
                      <Link to="/modules/final-polish" className="text-blue-600 hover:underline font-semibold">
                        Start Revision →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">✨ Key Features</h2>
            <p className="text-lg text-gray-600 mb-8">
              What makes JEE Prep Master different
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Performance Analytics</h3>
                    <p className="text-gray-700 text-sm">
                      Track your progress with detailed subject-wise and topic-wise analytics. Identify strengths and weaknesses to focus your preparation effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Instant Feedback</h3>
                    <p className="text-gray-700 text-sm">
                      Get immediate feedback on practice questions with step-by-step solutions and detailed explanations for every problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Structured Curriculum</h3>
                    <p className="text-gray-700 text-sm">
                      Follow a carefully designed learning path that covers the entire JEE syllabus systematically from foundation to advanced level.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">🧠</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Mental Conditioning</h3>
                    <p className="text-gray-700 text-sm">
                      Learn stress management, time optimization, and develop the growth mindset required to excel in JEE with our Mental Make-Up module.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-blue-100">Learning Modules</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Practice Questions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Mock Tests</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">📚 Additional Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/revision" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Revision & Strategy</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Quick revision notes, formula sheets, and effective study strategies for last-minute preparation.
                </p>
                <span className="text-blue-600 font-semibold">Explore →</span>
              </Link>

              <Link to="/mock-tests" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Mock Tests</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Full-length mock tests simulating actual JEE exam conditions with detailed performance analysis.
                </p>
                <span className="text-blue-600 font-semibold">Take Test →</span>
              </Link>

              <Link to="/analytics" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Analytics Dashboard</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Comprehensive performance tracking with topic-wise strength analysis and personalized recommendations.
                </p>
                <span className="text-blue-600 font-semibold">View Dashboard →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community/Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">🤝 Community & Support</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Need Help?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <div>
                        <strong>Contact Us:</strong> <Link to="/contact" className="text-blue-600 hover:underline">Get in touch</Link> for support and queries
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <div>
                        <strong>About Us:</strong> Learn more <Link to="/about" className="text-blue-600 hover:underline">about our mission</Link>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <div>
                        <strong>Mental Health:</strong> Read our <Link to="/mental-makeup" className="text-blue-600 hover:underline">Mental Make-Up</Link> guide
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <Link to="/about-jee" className="text-blue-600 hover:underline">Complete JEE Exam Guide</Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <Link to="/modules/foundation-builder" className="text-blue-600 hover:underline">Start with Foundation Builder</Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <Link to="/modules/practice-engine" className="text-blue-600 hover:underline">Practice Questions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your JEE Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students preparing for JEE with our comprehensive, structured platform
            </p>
            <Link 
              to="/modules/foundation-builder" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition inline-block shadow-lg"
            >
              Begin Learning Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

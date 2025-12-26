import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-6xl md:text-7xl">🎓</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Learn JEE
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-50 font-medium">
              Master Your Path to IIT
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive, structured learning platform for JEE Main and Advanced preparation. 
              Seven curated modules covering Physics, Chemistry, and Mathematics with practice problems, 
              mock tests, previous year questions, and performance analytics.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="#getting-started" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-lg"
              >
                Get Started
              </Link>
              <Link 
                to="/about-jee" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border-2 border-white/30 text-lg"
              >
                About JEE
              </Link>
              <Link 
                to="/mental-makeup" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border-2 border-white/30 text-lg"
              >
                Mental Preparation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-gray-900 flex items-center gap-3">
              <span>📋</span> Table of Contents
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-display font-semibold text-gray-900 mb-4 text-lg">Getting Started</h3>
                <ul className="space-y-2.5 text-blue-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    <a href="#getting-started" className="hover:underline hover:text-blue-700 transition">Quick Start Guide</a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    <Link to="/about-jee" className="hover:underline hover:text-blue-700 transition">About JEE Exams</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    <Link to="/mental-makeup" className="hover:underline hover:text-blue-700 transition">Mental Make-Up</Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h3 className="font-display font-semibold text-gray-900 mb-4 text-lg">Learning Modules</h3>
                <ul className="space-y-2.5 text-purple-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">→</span>
                    <a href="#modules" className="hover:underline hover:text-purple-700 transition">7 Core Modules</a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">→</span>
                    <Link to="/modules/practice-engine" className="hover:underline hover:text-purple-700 transition">Practice Engine</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">→</span>
                    <Link to="/modules/pyq-vault" className="hover:underline hover:text-purple-700 transition">PYQ Vault</Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-display font-semibold text-gray-900 mb-4 text-lg">Resources</h3>
                <ul className="space-y-2.5 text-green-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <Link to="/mock-tests" className="hover:underline hover:text-green-700 transition">Mock Tests</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <Link to="/revision" className="hover:underline hover:text-green-700 transition">Revision & Strategy</Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">→</span>
                    <Link to="/analytics" className="hover:underline hover:text-green-700 transition">Analytics Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 flex items-center gap-3">
              <span>🚀</span> Getting Started
            </h2>
            <p className="text-lg text-gray-600 mb-8">Begin your systematic JEE preparation journey</p>
            
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-l-4 border-blue-600 p-8 rounded-xl mb-10 shadow-soft">
              <h3 className="text-2xl font-display font-bold mb-4 text-blue-900">Start Your JEE Journey</h3>
              <p className="text-gray-700 mb-6 text-lg">
                Follow these steps to begin your systematic JEE preparation:
              </p>
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <strong className="text-gray-900">Understand the Exam:</strong> Read the <Link to="/about-jee" className="text-blue-600 hover:underline font-semibold">About JEE</Link> page to understand exam structure and patterns
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <strong className="text-gray-900">Build Foundation:</strong> Start with <Link to="/modules/foundation-builder" className="text-blue-600 hover:underline font-semibold">Foundation Builder</Link> to build strong fundamentals
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <strong className="text-gray-900">Practice Daily:</strong> Use the <Link to="/modules/practice-engine" className="text-blue-600 hover:underline font-semibold">Practice Engine</Link> with instant feedback
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <strong className="text-gray-900">Take Mock Tests:</strong> Regular <Link to="/mock-tests" className="text-blue-600 hover:underline font-semibold">Mock Tests</Link> to track progress
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                  <div>
                    <strong className="text-gray-900">Monitor Performance:</strong> Track via <Link to="/analytics" className="text-blue-600 hover:underline font-semibold">Analytics Dashboard</Link>
                  </div>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-soft-lg transition-all card-hover border border-gray-100">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-display font-bold mb-3 text-gray-900">Prerequisites</h3>
                <p className="text-gray-600 leading-relaxed">Class 11-12 PCM background. Dedication and consistency are key to success.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-soft-lg transition-all card-hover border border-gray-100">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-display font-bold mb-3 text-gray-900">Time Commitment</h3>
                <p className="text-gray-600 leading-relaxed">6-8 hours daily recommended. Follow structured 12-18 month preparation plan.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-soft-lg transition-all card-hover border border-gray-100">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-display font-bold mb-3 text-gray-900">Goal Setting</h3>
                <p className="text-gray-600 leading-relaxed">Set realistic targets. Focus on understanding concepts, not just solving problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path / Modules Section */}
      <section id="modules" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 flex items-center gap-3">
              <span>📖</span> Learning Modules
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Seven comprehensive modules designed to take you from basics to JEE Advanced level
            </p>
            
            <div className="space-y-6">
              {/* Module 1 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-soft-lg transition-all card-hover">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">🏗️</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">1. Foundation Builder</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Master NCERT-level concepts in Physics, Chemistry, and Mathematics. Build strong fundamentals with theory, examples, and exercises.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Duration: 3-4 months</span>
                      <span className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">Level: Beginner</span>
                      <Link to="/modules/foundation-builder" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group">
                        Start Module 
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-soft-lg transition-all card-hover">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">🎯</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">2. Advanced Integrator</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Progress to JEE Main level complexity. Integrate concepts across topics and develop problem-solving strategies.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Duration: 2-3 months</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">Level: Intermediate</span>
                      <Link to="/modules/advanced-integrator" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group">
                        Start Module 
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-soft-lg transition-all card-hover">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">⭐</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">3. Masterclass</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Tackle JEE Advanced level problems. Master multi-concept integration and develop intuition for complex questions.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Duration: 2-3 months</span>
                      <span className="text-sm bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium">Level: Advanced</span>
                      <Link to="/modules/masterclass" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group">
                        Start Module 
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-soft-lg transition-all card-hover">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">💪</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">4. Practice Engine</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Daily Practice Problems (DPPs) with instant feedback and detailed solutions. Track progress topic-wise.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Duration: Ongoing</span>
                      <span className="text-sm bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">Interactive</span>
                      <Link to="/modules/practice-engine" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group">
                        Start Practicing 
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 5 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-orange-400 hover:shadow-soft-lg transition-all card-hover">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">📝</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">5. Simulated Exam Hub</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Full-length mock tests in actual JEE format. Build exam temperament and time management skills.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Regular Tests</span>
                      <span className="text-sm bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">Timed</span>
                      <Link to="/modules/simulated-exam-hub" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group">
                        Take Mock Test 
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 6 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-soft-lg transition-all card-hover">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">📚</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">6. PYQ Vault</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      10+ years of Previous Year Questions from JEE Main and Advanced with comprehensive solutions.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">1000+ Questions</span>
                      <span className="text-sm bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">Topic-wise</span>
                      <Link to="/modules/pyq-vault" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group">
                        Browse PYQs 
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 7 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-teal-400 hover:shadow-soft-lg transition-all card-hover">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">✨</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">7. Final Polish</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Last-minute revision with formula sheets, quick summaries, and exam day strategies.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">Duration: 2-4 weeks</span>
                      <span className="text-sm bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-medium">Pre-Exam</span>
                      <Link to="/modules/final-polish" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 group">
                        Start Revision 
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 flex items-center gap-3">
              <span>✨</span> Key Features
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              What makes Learn JEE different
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all card-hover border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-3xl shadow-md">
                    📊
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-gray-900">Performance Analytics</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Track your progress with detailed subject-wise and topic-wise analytics. Identify strengths and weaknesses to focus your preparation effectively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all card-hover border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-3xl shadow-md">
                    ⚡
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-gray-900">Instant Feedback</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get immediate feedback on practice questions with step-by-step solutions and detailed explanations for every problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all card-hover border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-3xl shadow-md">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-gray-900">Structured Curriculum</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Follow a carefully designed learning path that covers the entire JEE syllabus systematically from foundation to advanced level.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all card-hover border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-3xl shadow-md">
                    🧠
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-gray-900">Mental Conditioning</h3>
                    <p className="text-gray-600 leading-relaxed">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-display font-bold mb-2 group-hover:scale-110 transition-transform">7</div>
                <div className="text-blue-100 font-medium">Learning Modules</div>
              </div>
              <div className="group">
                <div className="text-5xl font-display font-bold mb-2 group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-blue-100 font-medium">Practice Questions</div>
              </div>
              <div className="group">
                <div className="text-5xl font-display font-bold mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-blue-100 font-medium">Mock Tests</div>
              </div>
              <div className="group">
                <div className="text-5xl font-display font-bold mb-2 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-blue-100 font-medium">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-gray-900 flex items-center gap-3">
              <span>📚</span> Additional Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/revision" className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-soft-lg transition-all card-hover border border-blue-100">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📖</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">Revision & Strategy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Quick revision notes, formula sheets, and effective study strategies for last-minute preparation.
                </p>
                <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link to="/mock-tests" className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-soft-lg transition-all card-hover border border-purple-100">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">Mock Tests</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Full-length mock tests simulating actual JEE exam conditions with detailed performance analysis.
                </p>
                <span className="text-purple-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Take Test
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link to="/analytics" className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-soft-lg transition-all card-hover border border-green-100">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive performance tracking with topic-wise strength analysis and personalized recommendations.
                </p>
                <span className="text-green-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Dashboard
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community/Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-gray-900 flex items-center gap-3">
              <span>🤝</span> Community & Support
            </h2>
            
            <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-soft">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-6 text-gray-900">Need Help?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">→</span>
                      <div>
                        <strong className="text-gray-900">Contact Us:</strong> <Link to="/contact" className="text-blue-600 hover:underline font-semibold">Get in touch</Link> for support and queries
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">→</span>
                      <div>
                        <strong className="text-gray-900">About Us:</strong> Learn more <Link to="/about" className="text-blue-600 hover:underline font-semibold">about our mission</Link>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">→</span>
                      <div>
                        <strong className="text-gray-900">Mental Health:</strong> Read our <Link to="/mental-makeup" className="text-blue-600 hover:underline font-semibold">Mental Make-Up</Link> guide
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-6 text-gray-900">Quick Links</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">→</span>
                      <Link to="/about-jee" className="text-blue-600 hover:underline font-semibold">Complete JEE Exam Guide</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">→</span>
                      <Link to="/modules/foundation-builder" className="text-blue-600 hover:underline font-semibold">Start with Foundation Builder</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">→</span>
                      <Link to="/modules/practice-engine" className="text-blue-600 hover:underline font-semibold">Practice Questions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Start Your JEE Journey?
            </h2>
            <p className="text-xl mb-10 text-blue-100 leading-relaxed">
              Join thousands of students preparing for JEE with our comprehensive, structured platform
            </p>
            <Link 
              to="/modules/foundation-builder" 
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:-translate-y-1"
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

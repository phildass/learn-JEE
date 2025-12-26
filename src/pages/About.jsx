function About() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Empowering JEE aspirants to achieve their engineering dreams
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            JEE Prep Master is a comprehensive online platform designed to help students prepare effectively for JEE Main and Advanced examinations. We understand the challenges faced by JEE aspirants and have created a structured, easy-to-follow learning path.
          </p>
          <p className="text-lg text-gray-700">
            Our goal is to make quality JEE preparation accessible to every student, providing them with the tools, resources, and guidance needed to succeed in one of India's most competitive exams.
          </p>
        </section>

        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Structured Learning</h3>
              <p className="text-gray-700">
                Seven comprehensive modules covering the entire JEE syllabus, from foundation to advanced level.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-900">Practice & Tests</h3>
              <p className="text-gray-700">
                Extensive question banks, daily practice problems, and full-length mock tests with detailed solutions.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-purple-900">Analytics Dashboard</h3>
              <p className="text-gray-700">
                Track your progress with detailed performance analytics and identify areas for improvement.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-orange-900">PYQ Vault</h3>
              <p className="text-gray-700">
                Access to 10+ years of previous year questions with comprehensive solutions and explanations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Approach</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl mr-4">📚</span>
              <div>
                <h3 className="font-bold text-lg mb-1">Comprehensive Coverage</h3>
                <p className="text-gray-700">
                  We cover the entire JEE syllabus systematically, ensuring no topic is left behind.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4">🎯</span>
              <div>
                <h3 className="font-bold text-lg mb-1">Concept-Focused</h3>
                <p className="text-gray-700">
                  We emphasize conceptual understanding over rote learning, building strong fundamentals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4">⚡</span>
              <div>
                <h3 className="font-bold text-lg mb-1">Practice-Oriented</h3>
                <p className="text-gray-700">
                  Regular practice through DPPs and mock tests to build speed, accuracy, and exam temperament.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-4">📊</span>
              <div>
                <h3 className="font-bold text-lg mb-1">Data-Driven</h3>
                <p className="text-gray-700">
                  Analytics and performance tracking to help you make informed decisions about your preparation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join Thousands of Successful Students</h2>
          <p className="mb-6">
            Start your JEE preparation journey with us today and take the first step towards your engineering dreams.
          </p>
          <a 
            href="/"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
}

export default About;

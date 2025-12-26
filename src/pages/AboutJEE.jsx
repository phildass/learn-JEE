function AboutJEE() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About JEE Exams</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Comprehensive guide to Joint Entrance Examination (JEE) Main and Advanced
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What is JEE?</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              The Joint Entrance Examination (JEE) is a highly competitive engineering entrance examination conducted for admission to various undergraduate engineering and architecture programs in India. It is conducted in two stages:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-3 text-blue-900">JEE Main</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Conducted by National Testing Agency (NTA)</li>
                  <li>• Gateway to NITs, IIITs, and other CFTIs</li>
                  <li>• Also serves as qualifying exam for JEE Advanced</li>
                  <li>• Conducted twice a year (January & April sessions)</li>
                  <li>• Computer-based test (CBT)</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold mb-3 text-indigo-900">JEE Advanced</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Conducted by one of the IITs on rotation</li>
                  <li>• Gateway to 23 IITs across India</li>
                  <li>• Only top 2.5 lakh JEE Main qualifiers can appear</li>
                  <li>• Conducted once a year</li>
                  <li>• Computer-based test with two papers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Structure */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Exam Structure</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">JEE Main Pattern</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <table className="w-full">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-3 text-left">Subject</th>
                    <th className="p-3 text-left">Questions</th>
                    <th className="p-3 text-left">Duration</th>
                    <th className="p-3 text-left">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Physics</td>
                    <td className="p-3">20 MCQs + 5 Numerical (attempt any 5)</td>
                    <td className="p-3 rowspan-3">3 hours</td>
                    <td className="p-3">100</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Chemistry</td>
                    <td className="p-3">20 MCQs + 5 Numerical (attempt any 5)</td>
                    <td className="p-3">100</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Mathematics</td>
                    <td className="p-3">20 MCQs + 5 Numerical (attempt any 5)</td>
                    <td className="p-3">100</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-3">Total</td>
                    <td className="p-3">75 Questions (to attempt)</td>
                    <td className="p-3">3 hours</td>
                    <td className="p-3">300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">JEE Advanced Pattern</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4"><strong>Two Papers (Paper 1 & Paper 2):</strong></p>
              <ul className="space-y-2 ml-6 mb-4">
                <li>• Each paper: 3 hours duration</li>
                <li>• Each paper covers Physics, Chemistry, and Mathematics</li>
                <li>• Both papers compulsory</li>
                <li>• Multiple question types: MCQs, Numerical, Match the Following</li>
                <li>• Total marks: 306 (typically, may vary)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Marking Scheme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Marking Scheme</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-green-900">JEE Main</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>MCQs:</strong> +4 for correct, -1 for incorrect</li>
                <li><strong>Numerical:</strong> +4 for correct, 0 for incorrect (no negative marking)</li>
                <li><strong>Unattempted:</strong> 0 marks</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3 text-purple-900">JEE Advanced</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Varies by question type and section</li>
                <li>• Full, partial, and negative marking possible</li>
                <li>• Details mentioned in the question paper</li>
                <li>• Typically: +3/+4 for correct, -1/-2 for incorrect</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Preparation Strategy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Conceptual Clarity</h3>
              <p className="text-gray-700">
                Focus on understanding concepts thoroughly rather than rote learning. Build strong fundamentals in all three subjects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-600">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3">Regular Practice</h3>
              <p className="text-gray-700">
                Solve a variety of problems daily. Practice previous year questions and take regular mock tests to build speed and accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Time Management</h3>
              <p className="text-gray-700">
                Develop a study schedule and stick to it. Learn to manage time effectively during exams through mock tests.
              </p>
            </div>
          </div>
        </section>

        {/* Syllabus Focus */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Syllabus Overview</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-blue-900">Physics</h3>
              <p className="text-gray-700 mb-2"><strong>Key Areas:</strong></p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li>• Mechanics (Kinematics, Laws of Motion, Work & Energy)</li>
                <li>• Electrodynamics (Electrostatics, Current Electricity, Magnetism)</li>
                <li>• Modern Physics (Atoms, Nuclei, Electronics)</li>
                <li>• Thermodynamics & Heat</li>
                <li>• Optics & Waves</li>
                <li>• Simple Harmonic Motion</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-green-900">Chemistry</h3>
              <p className="text-gray-700 mb-2"><strong>Key Areas:</strong></p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li>• Physical Chemistry (Atomic Structure, Chemical Bonding, Thermodynamics)</li>
                <li>• Inorganic Chemistry (Periodic Table, Chemical Reactions, Coordination)</li>
                <li>• Organic Chemistry (Hydrocarbons, Functional Groups, Reactions)</li>
                <li>• Chemical Kinetics & Equilibrium</li>
                <li>• Electrochemistry</li>
                <li>• Solutions & Colligative Properties</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-purple-900">Mathematics</h3>
              <p className="text-gray-700 mb-2"><strong>Key Areas:</strong></p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li>• Algebra (Complex Numbers, Quadratic Equations, Sequences)</li>
                <li>• Calculus (Limits, Derivatives, Integrals, Differential Equations)</li>
                <li>• Coordinate Geometry (Straight Lines, Circles, Parabola, Ellipse)</li>
                <li>• Trigonometry</li>
                <li>• Vectors & 3D Geometry</li>
                <li>• Probability & Statistics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Important Tips */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Success Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <p className="text-gray-700">Start early and maintain consistency throughout preparation</p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <p className="text-gray-700">Focus on NCERT textbooks for strong basics, especially Chemistry</p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <p className="text-gray-700">Practice previous years' questions extensively</p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <p className="text-gray-700">Take regular mock tests to build exam temperament</p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <p className="text-gray-700">Revise regularly and make short notes for quick revision</p>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <p className="text-gray-700">Stay healthy - good sleep, exercise, and nutrition are crucial</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutJEE;

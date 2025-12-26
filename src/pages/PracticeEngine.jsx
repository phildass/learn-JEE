import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample questions data
const sampleQuestions = {
  physics: [
    {
      id: 1,
      question: "A body of mass 5 kg is moving with a velocity of 10 m/s. What is its kinetic energy?",
      options: ["250 J", "500 J", "125 J", "1000 J"],
      correct: 0,
      explanation: "Kinetic Energy = (1/2)mv² = (1/2) × 5 × 10² = 250 J",
      topic: "Work, Energy and Power"
    },
    {
      id: 2,
      question: "The SI unit of electric charge is:",
      options: ["Ampere", "Coulomb", "Volt", "Ohm"],
      correct: 1,
      explanation: "Coulomb is the SI unit of electric charge. 1 Coulomb = 1 Ampere × 1 Second",
      topic: "Electrostatics"
    }
  ],
  chemistry: [
    {
      id: 3,
      question: "What is the oxidation state of Cr in K₂Cr₂O₇?",
      options: ["+6", "+7", "+5", "+4"],
      correct: 0,
      explanation: "2(+1) + 2x + 7(-2) = 0, solving gives x = +6",
      topic: "Redox Reactions"
    },
    {
      id: 4,
      question: "Which of the following is not a state function?",
      options: ["Enthalpy", "Work", "Internal Energy", "Entropy"],
      correct: 1,
      explanation: "Work is a path function, not a state function. State functions depend only on initial and final states.",
      topic: "Thermodynamics"
    }
  ],
  mathematics: [
    {
      id: 5,
      question: "What is the value of i⁴ where i = √(-1)?",
      options: ["1", "-1", "i", "-i"],
      correct: 0,
      explanation: "i⁴ = (i²)² = (-1)² = 1",
      topic: "Complex Numbers"
    },
    {
      id: 6,
      question: "If sin θ = 3/5 and θ is in first quadrant, what is cos θ?",
      options: ["4/5", "3/4", "5/4", "5/3"],
      correct: 0,
      explanation: "Using sin²θ + cos²θ = 1, we get cos²θ = 1 - 9/25 = 16/25, so cos θ = 4/5 (positive in first quadrant)",
      topic: "Trigonometry"
    }
  ]
};

function PracticeEngine() {
  const [selectedSubject, setSelectedSubject] = useState('physics');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, attempted: 0 });

  const questions = sampleQuestions[selectedSubject];
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex) => {
    if (!showFeedback) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowFeedback(true);
      const isCorrect = selectedAnswer === currentQuestion.correct;
      setScore({
        correct: score.correct + (isCorrect ? 1 : 0),
        attempted: score.attempted + 1
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const changeSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-4">💪</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice Engine</h1>
            <p className="text-xl text-blue-100 mb-6">
              Daily Practice Problems with instant feedback and detailed solutions
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Score Display */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Your Progress</h3>
              <p className="text-gray-700">
                Score: {score.correct} / {score.attempted} 
                {score.attempted > 0 && ` (${Math.round((score.correct / score.attempted) * 100)}%)`}
              </p>
            </div>
            <Link 
              to="/analytics" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Analytics
            </Link>
          </div>
        </div>

        {/* Subject Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => changeSubject('physics')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedSubject === 'physics'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Physics
            </button>
            <button
              onClick={() => changeSubject('chemistry')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedSubject === 'chemistry'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Chemistry
            </button>
            <button
              onClick={() => changeSubject('mathematics')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedSubject === 'mathematics'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Mathematics
            </button>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {currentQuestion.topic}
                </span>
                <span className="text-gray-600">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                let optionClass = 'border-2 border-gray-300 hover:border-blue-500';
                
                if (showFeedback) {
                  if (index === currentQuestion.correct) {
                    optionClass = 'border-2 border-green-500 bg-green-50';
                  } else if (index === selectedAnswer) {
                    optionClass = 'border-2 border-red-500 bg-red-50';
                  } else {
                    optionClass = 'border-2 border-gray-200';
                  }
                } else if (selectedAnswer === index) {
                  optionClass = 'border-2 border-blue-500 bg-blue-50';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 rounded-lg text-left transition ${optionClass}`}
                    disabled={showFeedback}
                  >
                    <span className="font-semibold mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {showFeedback && index === currentQuestion.correct && (
                      <span className="float-right text-green-600">✓ Correct</span>
                    )}
                    {showFeedback && index === selectedAnswer && index !== currentQuestion.correct && (
                      <span className="float-right text-red-600">✗ Incorrect</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg mb-6 ${
                selectedAnswer === currentQuestion.correct
                  ? 'bg-green-50 border-l-4 border-green-500'
                  : 'bg-red-50 border-l-4 border-red-500'
              }`}>
                <h3 className="font-bold mb-2">
                  {selectedAnswer === currentQuestion.correct ? '✓ Correct!' : '✗ Incorrect'}
                </h3>
                <p className="text-gray-700"><strong>Explanation:</strong> {currentQuestion.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              
              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Question →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-bold text-lg mb-2">Topic-wise Practice</h3>
              <p className="text-gray-700 text-sm">Organized by chapters and topics</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-lg mb-2">Instant Feedback</h3>
              <p className="text-gray-700 text-sm">Get immediate explanations</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">📊</div>
              <h3 className="font-bold text-lg mb-2">Track Progress</h3>
              <p className="text-gray-700 text-sm">Monitor your improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeEngine;

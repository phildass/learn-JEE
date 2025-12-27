import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { assessmentsAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

function TakeAssessment() {
  const { assessmentId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime] = useState(new Date().toISOString());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  useEffect(() => {
    loadAssessment();
  }, [assessmentId]);

  useEffect(() => {
    if (!assessment) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [assessment]);

  const loadAssessment = async () => {
    try {
      const response = await assessmentsAPI.getAssessment(assessmentId);
      setAssessment(response.data);
      setTimeLeft(response.data.duration_minutes * 60);
      
      // Initialize answers object
      const initialAnswers = {};
      response.data.questions.forEach((q) => {
        initialAnswers[q.id] = {
          question_id: q.id,
          user_answer: null,
          time_spent_seconds: 0,
          marked_for_review: false,
        };
      });
      setAnswers(initialAnswers);
    } catch (error) {
      console.error('Error loading assessment:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (questionId, value) => {
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        user_answer: value,
        time_spent_seconds: prev[questionId].time_spent_seconds + timeSpent,
      },
    }));
    
    setQuestionStartTime(Date.now());
  };

  const toggleMarkForReview = (questionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        marked_for_review: !prev[questionId].marked_for_review,
      },
    }));
  };

  const goToQuestion = (index) => {
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    const currentQuestion = assessment.questions[currentQuestionIndex];
    
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        time_spent_seconds: prev[currentQuestion.id].time_spent_seconds + timeSpent,
      },
    }));
    
    setCurrentQuestionIndex(index);
    setQuestionStartTime(Date.now());
  };

  const handleSubmit = async () => {
    if (!user) {
      alert('Please log in to submit the assessment');
      return;
    }

    const totalTime = assessment.duration_minutes * 60 - timeLeft;
    const answersArray = Object.values(answers);

    try {
      const response = await assessmentsAPI.submitAssessment(assessmentId, {
        answers: answersArray,
        time_taken_seconds: totalTime,
        started_at: startTime,
      });

      navigate(`/assessments/${assessmentId}/results/${response.data.attempt_id}`);
    } catch (error) {
      console.error('Error submitting assessment:', error);
      alert('Error submitting assessment. Please try again.');
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getQuestionStatus = (question) => {
    const answer = answers[question.id];
    if (answer.marked_for_review) return 'review';
    if (answer.user_answer !== null) return 'answered';
    return 'not-answered';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'answered':
        return 'bg-green-500';
      case 'review':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-300';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading assessment...</p>
        </div>
      </div>
    );
  }

  if (!assessment || !assessment.questions || assessment.questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Assessment not found or has no questions</p>
          <Link to="/assessments" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
            Back to Assessments
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = assessment.questions[currentQuestionIndex];
  const answeredCount = Object.values(answers).filter((a) => a.user_answer !== null).length;
  const reviewCount = Object.values(answers).filter((a) => a.marked_for_review).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Timer */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{assessment.title}</h1>
              <p className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} of {assessment.questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`text-2xl font-bold ${timeLeft < 300 ? 'text-red-600' : 'text-gray-900'}`}>
                ⏱️ {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6">
              {/* Question Type Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {currentQuestion.question_type}
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {currentQuestion.marks} marks
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {currentQuestion.difficulty}
                </span>
              </div>

              {/* Question Text */}
              <div className="text-lg text-gray-900 mb-6 whitespace-pre-wrap leading-relaxed">
                {currentQuestion.question_text}
              </div>

              {/* Options for MCQ and Assertion-Reason */}
              {(currentQuestion.question_type === 'MCQ' || currentQuestion.question_type === 'ASSERTION_REASON') && currentQuestion.options && (
                <div className="space-y-3">
                  {JSON.parse(currentQuestion.options).map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        answers[currentQuestion.id].user_answer === option
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={option}
                        checked={answers[currentQuestion.id].user_answer === option}
                        onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="text-gray-900">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Input for Integer Type */}
              {currentQuestion.question_type === 'INTEGER' && (
                <div>
                  <input
                    type="number"
                    value={answers[currentQuestion.id].user_answer || ''}
                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                    placeholder="Enter your answer (integer)"
                    className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                  />
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => goToQuestion(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>

              <button
                onClick={() => toggleMarkForReview(currentQuestion.id)}
                className={`px-6 py-3 rounded-lg transition ${
                  answers[currentQuestion.id].marked_for_review
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                    : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                }`}
              >
                {answers[currentQuestion.id].marked_for_review ? '★ Marked' : '☆ Mark for Review'}
              </button>

              <button
                onClick={() => goToQuestion(Math.min(assessment.questions.length - 1, currentQuestionIndex + 1))}
                disabled={currentQuestionIndex === assessment.questions.length - 1}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Question Navigator</h3>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div className="bg-green-50 p-2 rounded">
                  <div className="text-green-700 font-bold">{answeredCount}</div>
                  <div className="text-green-600 text-xs">Answered</div>
                </div>
                <div className="bg-yellow-50 p-2 rounded">
                  <div className="text-yellow-700 font-bold">{reviewCount}</div>
                  <div className="text-yellow-600 text-xs">Marked</div>
                </div>
              </div>

              {/* Question Grid */}
              <div className="grid grid-cols-5 gap-2">
                {assessment.questions.map((question, index) => {
                  const status = getQuestionStatus(question);
                  return (
                    <button
                      key={question.id}
                      onClick={() => goToQuestion(index)}
                      className={`w-10 h-10 rounded-lg font-medium text-sm ${
                        index === currentQuestionIndex
                          ? 'ring-2 ring-blue-500 ring-offset-2'
                          : ''
                      } ${getStatusColor(status)} ${
                        status === 'answered' ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-gray-600">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-gray-600">Marked for Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span className="text-gray-600">Not Answered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Submit Assessment?</h2>
            <p className="text-gray-600 mb-6">
              You have answered {answeredCount} out of {assessment.questions.length} questions.
              {reviewCount > 0 && ` ${reviewCount} question(s) marked for review.`}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TakeAssessment;

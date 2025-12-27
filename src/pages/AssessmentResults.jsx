import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { assessmentsAPI } from '../services/api';

function AssessmentResults() {
  const { assessmentId, attemptId } = useParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, [assessmentId, attemptId]);

  const loadResults = async () => {
    try {
      const response = await assessmentsAPI.getAttemptResults(assessmentId, attemptId);
      setResults(response.data);
    } catch (error) {
      console.error('Error loading results:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Results not found</p>
          <Link to="/dashboard" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const percentage = (results.score / results.total_marks) * 100;
  const correctAnswers = results.answers.filter((a) => a.is_correct).length;
  const totalQuestions = results.answers.length;
  const avgTime = Math.floor(results.time_taken_seconds / totalQuestions);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
              ← Back to Dashboard
            </Link>
          </div>

          {/* Score Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white shadow-lg">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-display font-bold mb-2">Assessment Complete! 🎉</h1>
              <p className="text-blue-100">Here are your results</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">{results.score}</div>
                <div className="text-blue-100 text-sm">Score</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">{percentage.toFixed(1)}%</div>
                <div className="text-blue-100 text-sm">Percentage</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">{correctAnswers}/{totalQuestions}</div>
                <div className="text-blue-100 text-sm">Correct</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">{avgTime}s</div>
                <div className="text-blue-100 text-sm">Avg. Time/Q</div>
              </div>
            </div>
          </div>

          {/* Performance Analysis */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Performance Analysis</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Accuracy</span>
                  <span className="font-semibold text-gray-900">
                    {((correctAnswers / totalQuestions) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all"
                    style={{ width: `${(correctAnswers / totalQuestions) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Score Progress</span>
                  <span className="font-semibold text-gray-900">
                    {results.score} / {results.total_marks}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Question-wise Analysis */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Question-wise Analysis
            </h2>
            <div className="space-y-6">
              {results.answers.map((answer, index) => (
                <div
                  key={answer.id}
                  className={`bg-white rounded-xl p-6 shadow-sm border-2 ${
                    answer.is_correct ? 'border-green-200' : 'border-red-200'
                  }`}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        answer.is_correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                            {answer.question_type}
                          </span>
                          {answer.is_correct ? (
                            <span className="text-green-600 font-semibold flex items-center gap-1">
                              ✓ Correct
                            </span>
                          ) : (
                            <span className="text-red-600 font-semibold flex items-center gap-1">
                              ✗ Incorrect
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Time: {answer.time_spent_seconds || 0}s
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="mb-4 text-gray-900 whitespace-pre-wrap">
                    {answer.question_text}
                  </div>

                  {/* Options (for MCQ) */}
                  {answer.options && (
                    <div className="space-y-2 mb-4">
                      {JSON.parse(answer.options).map((option, optIndex) => {
                        const isUserAnswer = option === answer.user_answer;
                        const isCorrectAnswer = option === answer.correct_answer;
                        
                        return (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg border-2 ${
                              isCorrectAnswer
                                ? 'border-green-500 bg-green-50'
                                : isUserAnswer
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {isCorrectAnswer && <span className="text-green-600 font-bold">✓</span>}
                              {isUserAnswer && !isCorrectAnswer && <span className="text-red-600 font-bold">✗</span>}
                              <span className={isCorrectAnswer || isUserAnswer ? 'font-semibold' : ''}>
                                {option}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* For Integer Type */}
                  {answer.question_type === 'INTEGER' && (
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        answer.is_correct ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
                      }`}>
                        <div className="text-sm text-gray-600 mb-1">Your Answer</div>
                        <div className="font-bold text-lg">{answer.user_answer || 'Not answered'}</div>
                      </div>
                      {!answer.is_correct && (
                        <div className="p-3 rounded-lg bg-green-50 border-2 border-green-500">
                          <div className="text-sm text-gray-600 mb-1">Correct Answer</div>
                          <div className="font-bold text-lg text-green-700">{answer.correct_answer}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Explanation */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Explanation:</h4>
                    <div className="text-gray-700 prose prose-sm max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {answer.explanation}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              to="/assessments"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Take Another Assessment
            </Link>
            <Link
              to="/analytics"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
            >
              View Detailed Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentResults;

import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { assessmentsAPI } from '../services/api';

function AssessmentList() {
  const [searchParams] = useSearchParams();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAssessments();
  }, [searchParams]);

  const loadAssessments = async () => {
    try {
      const params = {
        module_id: searchParams.get('module'),
        type: searchParams.get('type'),
      };
      
      const response = await assessmentsAPI.getAllAssessments(params);
      setAssessments(response.data);
    } catch (error) {
      console.error('Error loading assessments:', error);
    } finally {
      setLoading(false);
    }
  };

  const getAssessmentIcon = (type) => {
    switch (type) {
      case 'DPP':
        return '📝';
      case 'CHAPTER_TEST':
        return '📚';
      case 'MOCK_TEST':
        return '🎯';
      default:
        return '✍️';
    }
  };

  const getAssessmentColor = (type) => {
    switch (type) {
      case 'DPP':
        return 'blue';
      case 'CHAPTER_TEST':
        return 'purple';
      case 'MOCK_TEST':
        return 'green';
      default:
        return 'gray';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading assessments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
              Assessments & Practice
            </h1>
            <p className="text-lg text-gray-600">
              Test your knowledge with DPPs, chapter tests, and mock exams
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            <Link
              to="/assessments"
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
                !searchParams.get('type')
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Assessments
            </Link>
            <Link
              to="/assessments?type=DPP"
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
                searchParams.get('type') === 'DPP'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Daily Practice (DPP)
            </Link>
            <Link
              to="/assessments?type=CHAPTER_TEST"
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
                searchParams.get('type') === 'CHAPTER_TEST'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Chapter Tests
            </Link>
            <Link
              to="/assessments?type=MOCK_TEST"
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
                searchParams.get('type') === 'MOCK_TEST'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Mock Tests
            </Link>
          </div>

          {/* Assessments Grid */}
          {assessments.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {assessments.map((assessment) => {
                const color = getAssessmentColor(assessment.assessment_type);
                return (
                  <Link
                    key={assessment.id}
                    to={`/assessments/${assessment.id}/take`}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">
                        {getAssessmentIcon(assessment.assessment_type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                          {assessment.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {assessment.description}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className={`bg-${color}-100 text-${color}-700 px-3 py-1 rounded-full font-medium`}>
                            {assessment.assessment_type.replace('_', ' ')}
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {assessment.duration_minutes} min
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {assessment.total_marks} marks
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-blue-600 opacity-0 group-hover:opacity-100 transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
              <p className="text-gray-500 text-lg mb-4">No assessments available</p>
              <Link to="/dashboard" className="text-blue-600 hover:text-blue-700 font-medium">
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssessmentList;

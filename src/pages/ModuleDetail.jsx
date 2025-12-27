import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesAPI } from '../services/api';

function ModuleDetail() {
  const { moduleId } = useParams();
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadModule();
  }, [moduleId]);

  const loadModule = async () => {
    try {
      const response = await coursesAPI.getModule(moduleId);
      setModule(response.data);
    } catch (error) {
      console.error('Error loading module:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading module...</p>
        </div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Module not found</p>
          <Link to="/dashboard" className="mt-4 inline-block text-blue-600 hover:text-blue-700">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

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

          {/* Module Header */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mb-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📚</div>
              <div className="flex-1">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
                  {module.title}
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  {module.description}
                </p>
                <div className="flex gap-3 text-sm">
                  <span className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium">
                    {module.lessons?.length || 0} Lessons
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Lessons
            </h2>
            
            {module.lessons && module.lessons.length > 0 ? (
              <div className="space-y-3">
                {module.lessons.map((lesson, index) => (
                  <Link
                    key={lesson.id}
                    to={`/lessons/${lesson.id}`}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all flex items-center gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-display font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {lesson.duration_minutes || 0} min
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {lesson.lesson_type}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-blue-600 opacity-0 group-hover:opacity-100 transition">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
                <p className="text-gray-500">No lessons available yet</p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Link
              to={`/assessments?module=${moduleId}`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-purple-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">✍️</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Practice Questions</h3>
                  <p className="text-sm text-gray-600">Test your understanding</p>
                </div>
              </div>
            </Link>

            <Link
              to={`/assessments?module=${moduleId}&type=CHAPTER_TEST`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-green-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">📝</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Chapter Tests</h3>
                  <p className="text-sm text-gray-600">Comprehensive evaluation</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleDetail;

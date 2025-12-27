import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesAPI } from '../services/api';

function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourse();
  }, [courseId]);

  const loadCourse = async () => {
    try {
      const response = await coursesAPI.getCourse(courseId);
      setCourse(response.data);
    } catch (error) {
      console.error('Error loading course:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Course not found</p>
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

          {/* Course Header */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📖</div>
              <div className="flex-1">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
                  {course.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm">
                    {course.subject}
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium text-sm">
                    {course.difficulty}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium text-sm">
                    {course.modules?.length || 0} Modules
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Course Modules
            </h2>
            
            {course.modules && course.modules.length > 0 ? (
              <div className="space-y-4">
                {course.modules.map((module) => (
                  <div
                    key={module.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            {module.lesson_count || 0} lessons
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/modules/${module.id}`}
                        className="flex-shrink-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                      >
                        Start Learning →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
                <p className="text-gray-500">No modules available yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

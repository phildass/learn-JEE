import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { coursesAPI, progressAPI } from '../services/api';

function Dashboard() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [coursesRes, progressRes] = await Promise.all([
        coursesAPI.getAllCourses(),
        progressAPI.getProgress(),
      ]);
      
      setCourses(coursesRes.data);
      setProgress(progressRes.data);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-display font-bold mb-2">
              Welcome back, {user?.full_name || user?.username}! 👋
            </h1>
            <p className="text-blue-100 text-lg">
              Continue your JEE preparation journey
            </p>
          </div>

          {/* Progress Overview */}
          {progress && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 font-medium">Overall Progress</h3>
                  <span className="text-3xl">📊</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {progress.overall?.completion_percentage?.toFixed(0) || 0}%
                </div>
                <p className="text-sm text-gray-500">
                  {progress.overall?.completed_lessons || 0} of {progress.overall?.total_lessons || 0} lessons completed
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 font-medium">Modules</h3>
                  <span className="text-3xl">📚</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {progress.module_progress?.length || 0}
                </div>
                <p className="text-sm text-gray-500">Active learning modules</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 font-medium">Recent Activity</h3>
                  <span className="text-3xl">🔥</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {progress.recent_activity?.length || 0}
                </div>
                <p className="text-sm text-gray-500">Recently accessed lessons</p>
              </div>
            </div>
          )}

          {/* Available Courses */}
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Available Courses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                    <span className="text-4xl ml-2">📖</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      {course.subject}
                    </span>
                    <span className="text-gray-500">
                      {course.module_count} {course.module_count === 1 ? 'module' : 'modules'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Module Progress */}
          {progress && progress.module_progress && progress.module_progress.length > 0 && (
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Module Progress
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {progress.module_progress.map((module) => {
                  const completionPercentage = module.total_lessons > 0
                    ? (module.completed_lessons / module.total_lessons) * 100
                    : 0;
                  
                  return (
                    <div
                      key={module.id}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                    >
                      <h3 className="text-lg font-display font-bold text-gray-900 mb-4">
                        {module.title}
                      </h3>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-gray-900">
                            {completionPercentage.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{ width: `${completionPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>
                          {module.completed_lessons} / {module.total_lessons} lessons
                        </span>
                        <span>
                          {Math.floor((module.total_time_seconds || 0) / 60)} min studied
                        </span>
                      </div>
                      <Link
                        to={`/modules/${module.id}`}
                        className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        Continue Learning →
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Link
              to="/analytics"
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-md transition-all group"
            >
              <span className="text-4xl mb-3 block">📊</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">View Analytics</h3>
              <p className="text-sm text-gray-600">Track your performance and progress</p>
            </Link>

            <Link
              to="/assessments"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-md transition-all group"
            >
              <span className="text-4xl mb-3 block">✍️</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Take Assessment</h3>
              <p className="text-sm text-gray-600">Practice with DPPs and tests</p>
            </Link>

            <Link
              to="/mock-tests"
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-md transition-all group"
            >
              <span className="text-4xl mb-3 block">🎯</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mock Tests</h3>
              <p className="text-sm text-gray-600">Simulate real exam conditions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

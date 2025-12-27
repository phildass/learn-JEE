import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function AnalyticsPlaceholder() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Please log in to view analytics</p>
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-3">
            📊 Performance Analytics
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Track your progress and identify areas for improvement
          </p>

          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center">
            <p className="text-gray-500 text-lg mb-4">No analytics data available yet</p>
            <p className="text-gray-400 mb-6">Start taking assessments to see your performance analytics</p>
            <Link
              to="/assessments"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Take an Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPlaceholder;

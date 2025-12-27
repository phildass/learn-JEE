import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { coursesAPI, progressAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

function LessonPlayer() {
  const { lessonId } = useParams();
  const { user } = useAuth();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    loadLesson();
    
    // Track time spent when component unmounts
    return () => {
      if (user && lesson) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        progressAPI.updateLessonProgress(lessonId, {
          time_spent_seconds: timeSpent,
          completed: false
        }).catch(console.error);
      }
    };
  }, [lessonId]);

  const loadLesson = async () => {
    try {
      const response = await coursesAPI.getLesson(lessonId);
      setLesson(response.data);
    } catch (error) {
      console.error('Error loading lesson:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsCompleted = async () => {
    try {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      await progressAPI.updateLessonProgress(lessonId, {
        time_spent_seconds: timeSpent,
        completed: true
      });
      alert('Lesson marked as completed! ✅');
    } catch (error) {
      console.error('Error marking lesson as completed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading lesson...</p>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Lesson not found</p>
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
              ← Back to Dashboard
            </Link>
          </div>

          {/* Lesson Header */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="flex-1">
                <h1 className="text-3xl font-display font-bold text-gray-900 mb-3">
                  {lesson.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {lesson.duration_minutes || 0} minutes
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {lesson.lesson_type}
                  </span>
                </div>
              </div>
              {user && (
                <button
                  onClick={markAsCompleted}
                  className="flex-shrink-0 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
                >
                  Mark as Completed ✓
                </button>
              )}
            </div>
          </div>

          {/* Lesson Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-display font-bold text-gray-900 mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-display font-bold text-gray-900 mt-6 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-display font-bold text-gray-900 mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                em: ({node, ...props}) => <em className="italic text-gray-700" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline ? (
                    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono" {...props} />
                  ) : (
                    <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4" {...props} />
                  ),
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300" {...props} />
                  </div>
                ),
                th: ({node, ...props}) => <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-bold" {...props} />,
                td: ({node, ...props}) => <td className="border border-gray-300 px-4 py-2" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 text-gray-700 italic" {...props} />
                ),
              }}
            >
              {lesson.content}
            </ReactMarkdown>
          </div>

          {/* Navigation Footer */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              to={`/modules/${lesson.module_id}`}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Module
            </Link>
            {user && (
              <button
                onClick={markAsCompleted}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Mark as Completed ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonPlayer;

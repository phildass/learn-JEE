import express from 'express';
import db from '../config/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get user progress
router.get('/', authenticateToken, (req, res) => {
  try {
    const userId = req.user.id;

    // Get overall progress
    const totalLessons = db.prepare('SELECT COUNT(*) as count FROM lessons').get();
    const completedLessons = db.prepare(
      'SELECT COUNT(*) as count FROM user_progress WHERE user_id = ? AND completed = 1'
    ).get(userId);

    // Get module-wise progress
    const moduleProgress = db.prepare(`
      SELECT 
        m.id,
        m.title,
        m.course_id,
        COUNT(l.id) as total_lessons,
        COUNT(CASE WHEN up.completed = 1 THEN 1 END) as completed_lessons,
        SUM(COALESCE(up.time_spent_seconds, 0)) as total_time_seconds
      FROM modules m
      LEFT JOIN lessons l ON m.id = l.module_id
      LEFT JOIN user_progress up ON l.id = up.lesson_id AND up.user_id = ?
      GROUP BY m.id
      ORDER BY m.order_index
    `).all(userId);

    // Get recent activity
    const recentActivity = db.prepare(`
      SELECT 
        l.id,
        l.title,
        l.module_id,
        up.last_accessed,
        up.time_spent_seconds,
        up.completed
      FROM user_progress up
      JOIN lessons l ON up.lesson_id = l.id
      WHERE up.user_id = ?
      ORDER BY up.last_accessed DESC
      LIMIT 10
    `).all(userId);

    res.json({
      overall: {
        total_lessons: totalLessons.count,
        completed_lessons: completedLessons.count,
        completion_percentage: (completedLessons.count / totalLessons.count) * 100
      },
      module_progress: moduleProgress,
      recent_activity: recentActivity
    });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Error fetching progress' });
  }
});

// Update lesson progress
router.post('/lessons/:lessonId', authenticateToken, (req, res) => {
  try {
    const { lessonId } = req.params;
    const { completed, time_spent_seconds } = req.body;
    const userId = req.user.id;

    // Check if progress exists
    const existing = db.prepare(
      'SELECT * FROM user_progress WHERE user_id = ? AND lesson_id = ?'
    ).get(userId, lessonId);

    if (existing) {
      // Update existing progress
      db.prepare(`
        UPDATE user_progress 
        SET completed = ?,
            time_spent_seconds = time_spent_seconds + ?,
            last_accessed = CURRENT_TIMESTAMP
        WHERE user_id = ? AND lesson_id = ?
      `).run(completed ? 1 : 0, time_spent_seconds || 0, userId, lessonId);
    } else {
      // Create new progress entry
      db.prepare(`
        INSERT INTO user_progress (user_id, lesson_id, completed, time_spent_seconds)
        VALUES (?, ?, ?, ?)
      `).run(userId, lessonId, completed ? 1 : 0, time_spent_seconds || 0);
    }

    res.json({ message: 'Progress updated successfully' });
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ error: 'Error updating progress' });
  }
});

// Get analytics dashboard data
router.get('/analytics', authenticateToken, (req, res) => {
  try {
    const userId = req.user.id;

    // Assessment performance
    const assessmentStats = db.prepare(`
      SELECT 
        a.assessment_type,
        COUNT(aa.id) as attempts,
        AVG(aa.score) as avg_score,
        AVG(aa.total_marks) as avg_total,
        AVG(aa.time_taken_seconds) as avg_time
      FROM assessment_attempts aa
      JOIN assessments a ON aa.assessment_id = a.id
      WHERE aa.user_id = ?
      GROUP BY a.assessment_type
    `).all(userId);

    // Question type accuracy
    const questionAccuracy = db.prepare(`
      SELECT 
        q.question_type,
        COUNT(ua.id) as total_answered,
        SUM(CASE WHEN ua.is_correct = 1 THEN 1 ELSE 0 END) as correct_answers,
        AVG(ua.time_spent_seconds) as avg_time
      FROM user_answers ua
      JOIN questions q ON ua.question_id = q.id
      JOIN assessment_attempts aa ON ua.attempt_id = aa.id
      WHERE aa.user_id = ?
      GROUP BY q.question_type
    `).all(userId);

    // Topic-wise performance
    const topicPerformance = db.prepare(`
      SELECT 
        q.topic,
        COUNT(ua.id) as total_answered,
        SUM(CASE WHEN ua.is_correct = 1 THEN 1 ELSE 0 END) as correct_answers,
        AVG(ua.time_spent_seconds) as avg_time
      FROM user_answers ua
      JOIN questions q ON ua.question_id = q.id
      JOIN assessment_attempts aa ON ua.attempt_id = aa.id
      WHERE aa.user_id = ? AND q.topic IS NOT NULL
      GROUP BY q.topic
    `).all(userId);

    // Recent assessment attempts
    const recentAttempts = db.prepare(`
      SELECT 
        aa.*,
        a.title,
        a.assessment_type
      FROM assessment_attempts aa
      JOIN assessments a ON aa.assessment_id = a.id
      WHERE aa.user_id = ?
      ORDER BY aa.completed_at DESC
      LIMIT 10
    `).all(userId);

    res.json({
      assessment_stats: assessmentStats,
      question_accuracy: questionAccuracy,
      topic_performance: topicPerformance,
      recent_attempts: recentAttempts
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Error fetching analytics' });
  }
});

export default router;

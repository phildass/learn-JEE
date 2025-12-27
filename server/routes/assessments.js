import express from 'express';
import db from '../config/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all assessments
router.get('/', (req, res) => {
  try {
    const { module_id, type } = req.query;
    let query = 'SELECT * FROM assessments WHERE 1=1';
    const params = [];

    if (module_id) {
      query += ' AND module_id = ?';
      params.push(module_id);
    }

    if (type) {
      query += ' AND assessment_type = ?';
      params.push(type);
    }

    query += ' ORDER BY id';

    const assessments = db.prepare(query).all(...params);
    res.json(assessments);
  } catch (error) {
    console.error('Error fetching assessments:', error);
    res.status(500).json({ error: 'Error fetching assessments' });
  }
});

// Get assessment by ID with questions
router.get('/:id', (req, res) => {
  try {
    const assessment = db.prepare('SELECT * FROM assessments WHERE id = ?')
      .get(req.params.id);

    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    const questions = db.prepare(`
      SELECT q.*, aq.order_index
      FROM questions q
      JOIN assessment_questions aq ON q.id = aq.question_id
      WHERE aq.assessment_id = ?
      ORDER BY aq.order_index
    `).all(req.params.id);

    res.json({ ...assessment, questions });
  } catch (error) {
    console.error('Error fetching assessment:', error);
    res.status(500).json({ error: 'Error fetching assessment' });
  }
});

// Submit assessment attempt
router.post('/:id/submit', authenticateToken, (req, res) => {
  const { answers, time_taken_seconds, started_at } = req.body;
  const assessmentId = req.params.id;
  const userId = req.user.id;

  try {
    // Get assessment details
    const assessment = db.prepare('SELECT * FROM assessments WHERE id = ?')
      .get(assessmentId);

    if (!assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    // Get all questions for this assessment
    const questions = db.prepare(`
      SELECT q.*
      FROM questions q
      JOIN assessment_questions aq ON q.id = aq.question_id
      WHERE aq.assessment_id = ?
    `).all(assessmentId);

    // Calculate score
    let score = 0;
    const gradedAnswers = [];

    for (const answer of answers) {
      const question = questions.find(q => q.id === answer.question_id);
      if (!question) continue;

      const isCorrect = answer.user_answer === question.correct_answer;
      if (isCorrect) {
        score += question.marks;
      }

      gradedAnswers.push({
        question_id: answer.question_id,
        user_answer: answer.user_answer,
        is_correct: isCorrect,
        time_spent_seconds: answer.time_spent_seconds || 0,
        marked_for_review: answer.marked_for_review || 0
      });
    }

    // Create assessment attempt
    const attemptResult = db.prepare(`
      INSERT INTO assessment_attempts 
      (user_id, assessment_id, score, total_marks, time_taken_seconds, started_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(userId, assessmentId, score, assessment.total_marks, time_taken_seconds, started_at);

    const attemptId = attemptResult.lastInsertRowid;

    // Save user answers
    const insertAnswer = db.prepare(`
      INSERT INTO user_answers 
      (attempt_id, question_id, user_answer, is_correct, time_spent_seconds, marked_for_review)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    for (const answer of gradedAnswers) {
      insertAnswer.run(
        attemptId,
        answer.question_id,
        answer.user_answer,
        answer.is_correct,
        answer.time_spent_seconds,
        answer.marked_for_review
      );
    }

    res.json({
      attempt_id: attemptId,
      score,
      total_marks: assessment.total_marks,
      percentage: (score / assessment.total_marks) * 100,
      time_taken_seconds,
      answers: gradedAnswers
    });
  } catch (error) {
    console.error('Error submitting assessment:', error);
    res.status(500).json({ error: 'Error submitting assessment' });
  }
});

// Get assessment attempt results
router.get('/:id/attempts/:attemptId', authenticateToken, (req, res) => {
  try {
    const attempt = db.prepare(`
      SELECT * FROM assessment_attempts 
      WHERE id = ? AND user_id = ?
    `).get(req.params.attemptId, req.user.id);

    if (!attempt) {
      return res.status(404).json({ error: 'Attempt not found' });
    }

    const answers = db.prepare(`
      SELECT ua.*, q.question_text, q.options, q.correct_answer, q.explanation, q.question_type
      FROM user_answers ua
      JOIN questions q ON ua.question_id = q.id
      WHERE ua.attempt_id = ?
    `).all(req.params.attemptId);

    res.json({ ...attempt, answers });
  } catch (error) {
    console.error('Error fetching attempt:', error);
    res.status(500).json({ error: 'Error fetching attempt' });
  }
});

export default router;

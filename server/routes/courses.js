import express from 'express';
import db from '../config/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all courses
router.get('/', (req, res) => {
  try {
    const courses = db.prepare(`
      SELECT c.*, 
        COUNT(DISTINCT m.id) as module_count
      FROM courses c
      LEFT JOIN modules m ON c.id = m.course_id
      GROUP BY c.id
      ORDER BY c.id
    `).all();

    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Error fetching courses' });
  }
});

// Get course by ID
router.get('/:id', (req, res) => {
  try {
    const course = db.prepare('SELECT * FROM courses WHERE id = ?')
      .get(req.params.id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const modules = db.prepare(`
      SELECT m.*,
        COUNT(DISTINCT l.id) as lesson_count
      FROM modules m
      LEFT JOIN lessons l ON m.id = l.module_id
      WHERE m.course_id = ?
      GROUP BY m.id
      ORDER BY m.order_index
    `).all(req.params.id);

    res.json({ ...course, modules });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ error: 'Error fetching course' });
  }
});

// Get module by ID
router.get('/modules/:id', (req, res) => {
  try {
    const module = db.prepare('SELECT * FROM modules WHERE id = ?')
      .get(req.params.id);

    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    const lessons = db.prepare(`
      SELECT * FROM lessons 
      WHERE module_id = ? 
      ORDER BY order_index
    `).all(req.params.id);

    res.json({ ...module, lessons });
  } catch (error) {
    console.error('Error fetching module:', error);
    res.status(500).json({ error: 'Error fetching module' });
  }
});

// Get lesson by ID
router.get('/lessons/:id', (req, res) => {
  try {
    const lesson = db.prepare('SELECT * FROM lessons WHERE id = ?')
      .get(req.params.id);

    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    res.json(lesson);
  } catch (error) {
    console.error('Error fetching lesson:', error);
    res.status(500).json({ error: 'Error fetching lesson' });
  }
});

export default router;

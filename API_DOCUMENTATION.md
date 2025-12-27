# API Documentation - Learn JEE LMS

Base URL: `http://localhost:5000/api`

## Authentication

All authenticated endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

### Register User
**POST** `/auth/register`

Request body:
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "full_name": "John Doe"
}
```

Response:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "full_name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Login
**POST** `/auth/login`

Request body:
```json
{
  "username": "johndoe",
  "password": "password123"
}
```

Response:
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "full_name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Courses

### Get All Courses
**GET** `/courses`

Response:
```json
[
  {
    "id": 1,
    "title": "JEE Physics",
    "description": "Complete Physics syllabus for JEE Main and Advanced",
    "subject": "Physics",
    "difficulty": "Advanced",
    "module_count": 1
  }
]
```

### Get Course Details
**GET** `/courses/:id`

Response:
```json
{
  "id": 1,
  "title": "JEE Physics",
  "description": "Complete Physics syllabus...",
  "subject": "Physics",
  "difficulty": "Advanced",
  "modules": [
    {
      "id": 1,
      "title": "Modern Physics",
      "description": "Comprehensive coverage...",
      "order_index": 10,
      "lesson_count": 3
    }
  ]
}
```

### Get Module Details
**GET** `/courses/modules/:id`

Response:
```json
{
  "id": 1,
  "course_id": 1,
  "title": "Modern Physics",
  "description": "Comprehensive coverage...",
  "order_index": 10,
  "lessons": [
    {
      "id": 1,
      "module_id": 1,
      "title": "Dual Nature of Radiation and Matter",
      "lesson_type": "theory",
      "order_index": 1,
      "duration_minutes": 90
    }
  ]
}
```

### Get Lesson Content
**GET** `/courses/lessons/:id`

Response:
```json
{
  "id": 1,
  "module_id": 1,
  "title": "Dual Nature of Radiation and Matter",
  "content": "# Dual Nature of Radiation and Matter\n\n## Introduction...",
  "lesson_type": "theory",
  "order_index": 1,
  "duration_minutes": 90
}
```

## Assessments

### Get All Assessments
**GET** `/assessments`

Query Parameters:
- `module_id` (optional): Filter by module
- `type` (optional): Filter by assessment type (DPP, CHAPTER_TEST, MOCK_TEST)

Response:
```json
[
  {
    "id": 1,
    "module_id": 1,
    "title": "Modern Physics - DPP 1",
    "description": "Daily Practice Problems...",
    "assessment_type": "DPP",
    "duration_minutes": 45,
    "total_marks": 40
  }
]
```

### Get Assessment with Questions
**GET** `/assessments/:id`

Response:
```json
{
  "id": 1,
  "module_id": 1,
  "title": "Modern Physics - DPP 1",
  "description": "Daily Practice Problems...",
  "assessment_type": "DPP",
  "duration_minutes": 45,
  "total_marks": 40,
  "questions": [
    {
      "id": 1,
      "question_text": "Light of wavelength 400 nm...",
      "question_type": "MCQ",
      "difficulty": "medium",
      "marks": 4,
      "options": "[\"0.5 eV\", \"1.1 eV\", \"2.0 eV\", \"3.1 eV\"]",
      "topic": "Photoelectric Effect"
    }
  ]
}
```

Note: `correct_answer` and `explanation` are not included in this response (only in results).

### Submit Assessment
**POST** `/assessments/:id/submit` (Authenticated)

Request body:
```json
{
  "answers": [
    {
      "question_id": 1,
      "user_answer": "1.1 eV",
      "time_spent_seconds": 45,
      "marked_for_review": false
    }
  ],
  "time_taken_seconds": 450,
  "started_at": "2025-12-27T05:00:00.000Z"
}
```

Response:
```json
{
  "attempt_id": 1,
  "score": 36,
  "total_marks": 40,
  "percentage": 90,
  "time_taken_seconds": 450,
  "answers": [
    {
      "question_id": 1,
      "user_answer": "1.1 eV",
      "is_correct": true,
      "time_spent_seconds": 45,
      "marked_for_review": false
    }
  ]
}
```

### Get Assessment Results
**GET** `/assessments/:id/attempts/:attemptId` (Authenticated)

Response:
```json
{
  "id": 1,
  "user_id": 1,
  "assessment_id": 1,
  "score": 36,
  "total_marks": 40,
  "time_taken_seconds": 450,
  "started_at": "2025-12-27T05:00:00.000Z",
  "completed_at": "2025-12-27T05:07:30.000Z",
  "answers": [
    {
      "id": 1,
      "question_id": 1,
      "question_text": "Light of wavelength 400 nm...",
      "question_type": "MCQ",
      "options": "[\"0.5 eV\", \"1.1 eV\", \"2.0 eV\", \"3.1 eV\"]",
      "user_answer": "1.1 eV",
      "correct_answer": "1.1 eV",
      "is_correct": true,
      "explanation": "Energy of photon E = hc/λ = 1240/400 = 3.1 eV...",
      "time_spent_seconds": 45
    }
  ]
}
```

## Progress Tracking

### Get User Progress
**GET** `/progress` (Authenticated)

Response:
```json
{
  "overall": {
    "total_lessons": 3,
    "completed_lessons": 1,
    "completion_percentage": 33.33
  },
  "module_progress": [
    {
      "id": 1,
      "title": "Modern Physics",
      "course_id": 1,
      "total_lessons": 3,
      "completed_lessons": 1,
      "total_time_seconds": 3600
    }
  ],
  "recent_activity": [
    {
      "id": 1,
      "title": "Dual Nature of Radiation and Matter",
      "module_id": 1,
      "last_accessed": "2025-12-27T05:00:00.000Z",
      "time_spent_seconds": 3600,
      "completed": true
    }
  ]
}
```

### Update Lesson Progress
**POST** `/progress/lessons/:lessonId` (Authenticated)

Request body:
```json
{
  "completed": true,
  "time_spent_seconds": 120
}
```

Response:
```json
{
  "message": "Progress updated successfully"
}
```

### Get Analytics
**GET** `/progress/analytics` (Authenticated)

Response:
```json
{
  "assessment_stats": [
    {
      "assessment_type": "DPP",
      "attempts": 5,
      "avg_score": 34.2,
      "avg_total": 40,
      "avg_time": 420
    }
  ],
  "question_accuracy": [
    {
      "question_type": "MCQ",
      "total_answered": 50,
      "correct_answers": 42,
      "avg_time": 45
    }
  ],
  "topic_performance": [
    {
      "topic": "Photoelectric Effect",
      "total_answered": 25,
      "correct_answers": 21,
      "avg_time": 50
    }
  ],
  "recent_attempts": [
    {
      "id": 1,
      "assessment_id": 1,
      "title": "Modern Physics - DPP 1",
      "assessment_type": "DPP",
      "score": 36,
      "total_marks": 40,
      "time_taken_seconds": 450,
      "completed_at": "2025-12-27T05:07:30.000Z"
    }
  ]
}
```

## Error Responses

All endpoints return standard error responses:

**400 Bad Request**
```json
{
  "error": "Validation error message",
  "errors": [
    {
      "field": "username",
      "message": "Username must be at least 3 characters"
    }
  ]
}
```

**401 Unauthorized**
```json
{
  "error": "Access token required"
}
```

**403 Forbidden**
```json
{
  "error": "Invalid or expired token"
}
```

**404 Not Found**
```json
{
  "error": "Resource not found"
}
```

**500 Internal Server Error**
```json
{
  "error": "Something went wrong!",
  "message": "Error details"
}
```

## Rate Limiting

Currently no rate limiting is implemented. This should be added in production.

## CORS

CORS is enabled for all origins in development. Configure appropriately for production.

## Security Notes

1. Always use HTTPS in production
2. Store JWT_SECRET securely (use environment variables)
3. Implement rate limiting
4. Add input sanitization
5. Use prepared statements (already implemented with better-sqlite3)
6. Validate all user inputs
7. Implement CSRF protection for state-changing operations

# Learn JEE - Full-Stack Learning Management System

A comprehensive, full-stack learning management system designed specifically for JEE Main and Advanced preparation. Built with React, Node.js, Express, and SQLite.

## Features

### 🎓 Complete Curriculum
- Structured learning modules covering Physics, Chemistry, and Mathematics
- Modern Physics module with AI-generated high-quality content
- Theory lessons with detailed explanations and solved examples
- Progressive difficulty levels from foundation to advanced

### 📝 Assessment Engine
- Daily Practice Problems (DPPs)
- Chapter Tests
- Full-length Mock Tests
- Multiple question types: MCQ, Integer, Assertion-Reason
- Real-time timer and question navigator
- Instant grading with detailed solutions

### 📊 Analytics & Progress Tracking
- Topic-wise performance analysis
- Question type accuracy metrics
- Time management insights
- Personalized progress dashboard
- Recent activity tracking

### 🔐 User Authentication
- Secure registration and login with JWT
- Password hashing with bcrypt
- Protected routes for authenticated features

### 💻 Modern Tech Stack
- **Frontend**: React 19, React Router, TailwindCSS, React Markdown, KaTeX
- **Backend**: Node.js, Express.js
- **Database**: SQLite with better-sqlite3
- **Math Rendering**: KaTeX for beautiful mathematical equations
- **API**: RESTful API with proper error handling

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd learn-JEE
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
NODE_ENV=development
\`\`\`

Create a `.env.local` file for frontend:

\`\`\`env
VITE_API_URL=http://localhost:5000/api
\`\`\`

### 4. Initialize Database with Sample Content

\`\`\`bash
npm run seed
\`\`\`

This will:
- Create the database schema
- Seed Modern Physics module with 3 comprehensive theory lessons
- Add 15 practice questions (MCQ, Integer, Assertion-Reason types)
- Create 3 assessments (DPP, Chapter Test, Mock Test)

### 5. Run the Application

#### Development Mode (runs both frontend and backend)

\`\`\`bash
npm run dev
\`\`\`

This starts:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

#### Run Frontend Only

\`\`\`bash
npm run client
\`\`\`

#### Run Backend Only

\`\`\`bash
npm run server
\`\`\`

## Usage Guide

### For Students

1. **Register an Account**
   - Visit http://localhost:5173/register
   - Create your account with username, email, and password

2. **Explore Courses**
   - Navigate to Dashboard after logging in
   - Browse available courses (Physics, Chemistry, Mathematics)

3. **Study Lessons**
   - Select a course → Choose a module → Start learning
   - Read theory lessons with math equations beautifully rendered
   - Track your progress automatically

4. **Take Assessments**
   - Practice with Daily Practice Problems (DPPs)
   - Challenge yourself with Chapter Tests
   - Simulate exam conditions with Mock Tests
   - Get instant results with detailed solutions

5. **View Analytics**
   - Access your performance dashboard
   - Analyze topic-wise strengths and weaknesses
   - Track improvement over time

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

#### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details with modules
- `GET /api/courses/modules/:id` - Get module with lessons
- `GET /api/courses/lessons/:id` - Get lesson content

#### Assessments
- `GET /api/assessments` - Get all assessments (supports filtering)
- `GET /api/assessments/:id` - Get assessment with questions
- `POST /api/assessments/:id/submit` - Submit assessment attempt
- `GET /api/assessments/:id/attempts/:attemptId` - Get attempt results

#### Progress
- `GET /api/progress` - Get user progress overview
- `POST /api/progress/lessons/:lessonId` - Update lesson progress
- `GET /api/progress/analytics` - Get detailed analytics

## Project Structure

\`\`\`
learn-JEE/
├── server/                    # Backend
│   ├── config/
│   │   └── database.js       # Database configuration
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   ├── courses.js       # Course routes
│   │   ├── assessments.js   # Assessment routes
│   │   └── progress.js      # Progress tracking routes
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── seed.js              # Database seeding script
│   └── index.js             # Express server entry point
├── src/                      # Frontend
│   ├── components/
│   │   └── layout/          # Layout components
│   ├── contexts/
│   │   └── AuthContext.jsx  # Authentication context
│   ├── pages/               # Page components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── ModuleDetail.jsx
│   │   ├── LessonPlayer.jsx
│   │   ├── AssessmentList.jsx
│   │   ├── TakeAssessment.jsx
│   │   ├── AssessmentResults.jsx
│   │   └── Analytics.jsx
│   ├── services/
│   │   └── api.js           # API service layer
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── data/                     # SQLite database (auto-created)
├── package.json
└── README.md
\`\`\`

## Database Schema

### Users
Stores user account information with encrypted passwords.

### Courses, Modules, Lessons
Hierarchical structure for organizing educational content.

### Questions
Question bank with support for multiple question types and detailed explanations.

### Assessments
Different types of tests (DPP, Chapter Test, Mock Test) with associated questions.

### Assessment Attempts & User Answers
Tracks user performance and stores detailed attempt data.

### User Progress
Monitors lesson completion and time spent studying.

## Content Structure (Modern Physics Module)

The seeded Modern Physics module includes:

### Lessons
1. **Dual Nature of Radiation and Matter**
   - Blackbody radiation and Planck's hypothesis
   - Photoelectric effect introduction
   - Solved examples with detailed explanations

2. **Photoelectric Effect - Advanced Concepts**
   - Experimental setup and observations
   - Einstein's photon theory
   - Graph analysis and applications

3. **de Broglie Wavelength and Matter Waves**
   - Wave-particle duality
   - Davisson-Germer experiment
   - Practical calculations and applications

### Question Bank
- 15 high-quality questions covering all topics
- Multiple question types: MCQ, Integer, Assertion-Reason
- Difficulty levels: Easy, Medium, Hard
- Comprehensive explanations for each answer

### Assessments
- **DPP**: 10 questions, 45 minutes
- **Chapter Test**: 15 questions, 90 minutes
- **Mock Test**: Full simulation, 120 minutes

## Adding More Content

To add more modules and content:

1. Create lessons in markdown format with LaTeX math support
2. Add questions to the database following the existing schema
3. Create assessments linking to your questions
4. Update the seed script or create a new seeding script

Example question format:
\`\`\`javascript
{
  question_text: "Your question here",
  question_type: "MCQ",  // or "INTEGER" or "ASSERTION_REASON"
  difficulty: "medium",
  marks: 4,
  options: JSON.stringify(["Option A", "Option B", "Option C", "Option D"]),
  correct_answer: "Option B",
  explanation: "Detailed explanation with LaTeX math: $$E = mc^2$$",
  topic: "Photoelectric Effect"
}
\`\`\`

## Math Rendering

The application uses KaTeX for rendering mathematical equations. Use LaTeX syntax in your content:

- Inline math: `$E = mc^2$`
- Display math: `$$\\frac{hc}{\\lambda}$$`

## Future Enhancements

Planned features for future releases:
- Adaptive learning algorithm
- Gamification elements (badges, leaderboards)
- Video lecture support
- Discussion forums
- Mobile app
- More subjects and modules
- Advanced analytics with ML-based recommendations

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected API endpoints
- Input validation
- XSS protection through React
- CORS configuration

### Security Notes for Production

⚠️ **Important**: This is an MVP implementation. Before deploying to production, implement:

1. **Rate Limiting**: Add express-rate-limit to prevent brute force attacks
2. **Input Sanitization**: Add additional validation and sanitization
3. **HTTPS**: Always use HTTPS in production
4. **Environment Variables**: Store JWT_SECRET and other secrets securely
5. **CSRF Protection**: Add CSRF tokens for state-changing operations
6. **SQL Injection Protection**: Already implemented via prepared statements
7. **Session Management**: Consider adding refresh tokens
8. **Logging**: Add comprehensive security logging and monitoring

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

[Add your license here]

## Support

For issues or questions:
- Create an issue on GitHub
- Contact: [Add contact information]

## Acknowledgments

- Built as part of JEE preparation initiative
- Modern Physics content generated with AI assistance
- UI/UX inspired by modern LMS platforms

---

**Happy Learning! 🎓**

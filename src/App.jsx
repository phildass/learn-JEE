import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutJEE from './pages/AboutJEE';
import MentalMakeup from './pages/MentalMakeup';
import FoundationBuilder from './pages/modules/FoundationBuilder';
import AdvancedIntegrator from './pages/modules/AdvancedIntegrator';
import Masterclass from './pages/modules/Masterclass';
import PracticeEngine from './pages/PracticeEngine';
import SimulatedExamHub from './pages/modules/SimulatedExamHub';
import PYQVault from './pages/modules/PYQVault';
import FinalPolish from './pages/modules/FinalPolish';
import MockTests from './pages/MockTests';
import Revision from './pages/Revision';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import ModuleDetail from './pages/ModuleDetail';
import LessonPlayer from './pages/LessonPlayer';
import AssessmentList from './pages/AssessmentList';
import TakeAssessment from './pages/TakeAssessment';
import AssessmentResults from './pages/AssessmentResults';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-jee" element={<AboutJEE />} />
            <Route path="/mental-makeup" element={<MentalMakeup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/modules/:moduleId" element={<ModuleDetail />} />
            <Route path="/lessons/:lessonId" element={<LessonPlayer />} />
            <Route path="/assessments" element={<AssessmentList />} />
            <Route path="/assessments/:assessmentId/take" element={<TakeAssessment />} />
            <Route path="/assessments/:assessmentId/results/:attemptId" element={<AssessmentResults />} />
            <Route path="/modules/foundation-builder" element={<FoundationBuilder />} />
            <Route path="/modules/advanced-integrator" element={<AdvancedIntegrator />} />
            <Route path="/modules/masterclass" element={<Masterclass />} />
            <Route path="/modules/practice-engine" element={<PracticeEngine />} />
            <Route path="/modules/simulated-exam-hub" element={<SimulatedExamHub />} />
            <Route path="/modules/pyq-vault" element={<PYQVault />} />
            <Route path="/modules/final-polish" element={<FinalPolish />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/revision" element={<Revision />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;

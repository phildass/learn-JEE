import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-jee" element={<AboutJEE />} />
          <Route path="/mental-makeup" element={<MentalMakeup />} />
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
  );
}

export default App;

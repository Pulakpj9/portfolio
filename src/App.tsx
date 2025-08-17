import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "@/components/navbar";
import IntroSection from "@/components/introSection";
import ExperienceItem from "@/components/experience";
import WorkSection from "@/components/work";
import TextureMesh from "@/components/textureMesh";
import Chatbot from "@/components/chatbot";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import WorksPage from '@/components/detailWorkPage';
import ContactSection from './components/contact';
// import WorksPage from "@/components/WorksPage"; // Create this component

function Home() {
  const activeSection = useSectionObserver(["intro", "experience", "work"]);

  return (
    <>
      <TextureMesh activeSection={activeSection} />
      {/* Overlay Content */}
      <div className="relative z-10">
        <Navbar />
        <IntroSection />
        <ExperienceItem />
        <WorkSection />
        <ContactSection />
      </div>
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <Router>
      <div
        className="relative min-h-screen"
        style={{ backgroundColor: "#242424", fontFamily: "IBM Plex Mono" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:category" element={<WorksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
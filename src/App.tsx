import Navbar from "@/components/navbar";
import IntroSection from "@/components/introSection";
import ExperienceItem from "@/components/experience";
import WorkSection from "@/components/work";
import TextureMesh from "@/components/textureMesh";
import { useSectionObserver } from "./hooks/useSectionObserver";

function App() {
  const activeSection = useSectionObserver(["intro", "experience", "work"]);

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: "#242424", fontFamily: "IBM Plex Mono" }}
    >
      <TextureMesh activeSection={activeSection} />
      {/* Overlay Content */}
      <div className="relative z-10">
        <Navbar />
        <IntroSection />
        <ExperienceItem />
        <WorkSection />
      </div>
    </div>
  );
}

export default App;

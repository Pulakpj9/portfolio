// import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import IntroSection from "@/components/introSection";
import ExperienceItem from "@/components/experience";
import WorkSection from "@/components/work";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <IntroSection />
      <ExperienceItem />
      <WorkSection />
    </div>
  );
}

export default App;

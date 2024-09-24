import Navbar from "@/components/navbar";
import IntroSection from "@/components/introSection";
import ExperienceItem from "@/components/experience";
import WorkSection from "@/components/work";
import { Canvas } from "@react-three/fiber"; // Import Canvas from react-three/fiber
import TextureMesh from "@/components/textureMesh"; // Assuming TextureMesh is in components folder

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background shader effect */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <TextureMesh />
        </Canvas>
      </div>

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

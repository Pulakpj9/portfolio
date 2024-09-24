import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Mesh } from "three"; // Importing Mesh type from Three.js

const TextureMesh: React.FC = () => {
  const meshRef = useRef<Mesh>(null); // Type meshRef with the Three.js Mesh type

  // Load texture using Three.js TextureLoader
  const texture = new THREE.TextureLoader().load("path/to/texture.jpg");

  // Use the frame loop to rotate the mesh
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime();
      meshRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* A simple Box Geometry */}
      <boxGeometry args={[2, 2, 2]} />
      {/* MeshStandardMaterial is using the loaded texture */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default TextureMesh;

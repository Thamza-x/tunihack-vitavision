import { Suspense, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Box } from 'lucide-react';
import Scene from '../Scene.jsx'; // Ensure correct path to Scene component

const Test = () => {
  useEffect(() => {
    // Debugging: Check if model loads properly
    console.log('Test component mounted');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="container mx-auto">
          <div className="flex items-center text-white">
            <Box className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">3D Model Viewer</h1>
          </div>
        </div>
      </header>

      {/* 3D Canvas */}
      <div className="w-full h-screen">
        <Canvas
          camera={{ position: [5, 5, 5], fov: 45 }}
          className="bg-gray-900"
          onCreated={() => console.log('Canvas created')}
        >
          <Environment preset="sunset" /> {/* Adds realistic lighting */}

          {/* Suspense for model loading */}
          <Suspense
            fallback={<div className="text-white text-center">Loading Model...</div>}
          >
            <Scene />
          </Suspense>

          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
          />
        </Canvas>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <p className="text-sm">
          Click and drag to rotate • Scroll to zoom • Right-click and drag to pan
        </p>
      </div>
    </div>
  );
}

export default Test;

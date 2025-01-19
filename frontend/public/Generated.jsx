import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import Scene from "../Scene"; // Ensure the correct path
import { motion } from 'framer-motion';
import axios from 'axios';

const Generated = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle form submission
  const handleFormSubmit = async () => {
    try {
      // Make a POST request to the backend
      const res = await axios.post('http://localhost:3000/req', { input });
      setResponse(res.data.generatedResponse); // Set the response to state
      console.log(response);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setResponse('Error: Failed to get response from AI.');
    }
  };
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const inputVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="container mx-auto">
          <div className="flex items-center text-white">
            <h1 className="text-2xl font-bold">3D Model Viewer</h1>
          </div>
        </div>
      </header>

      {/* 3D Canvas */}
      <div className="w-full h-screen">
        <Canvas
          camera={{ position: [5, 5, 5], fov: 45 }}
          className="bg-gray-900"
        >
          <Environment preset="sunset" />
          <Suspense fallback={<Html center>Loading Model...</Html>}>
            <Scene />
          </Suspense>
          <OrbitControls enableZoom enablePan enableRotate minDistance={2} maxDistance={10} />
        </Canvas>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <p className="text-sm">Scroll Down</p>
      </div>

      {/* AI Interaction */}
      <motion.div 
        className="flex flex-col items-center justify-center h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-4">AI Interaction</h2>
          <button 
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleFormSubmit}
          >
            Submit
          </button>

          <h3 className="mt-6 text-xl font-bold">AI Response:</h3>
          <div className="mt-2">{response}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Generated;

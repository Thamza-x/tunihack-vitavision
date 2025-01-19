import {  useState } from "react";



import { motion } from "framer-motion";

import axios from "axios";

const Generated = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/req", { input });
      console.log(res);
      setResponse(res.data.generatedResponse || "No response from AI.");
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("Error: Failed to get response from AI.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center relative">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-2xl font-bold">VitaVision</h1>
        </div>
      </header>

      {/* AI Interaction */}
      <motion.div
        className="flex flex-col items-center justify-center h-screen w-3/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="bg-slate-300 p-6 w-3/4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Chat With VitalBot</h2>
          <textarea
            className="w-full p-4 border border-gray-300 bg-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter your input for the AI..."
            rows={5}
          />
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded place-self-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <h3 className="mt-6 text-xl font-bold">AI Response:</h3>
          <div className="mt-2 whitespace-pre-line">
            {response || "Awaiting response..."}
          </div>
        </motion.div>
      </motion.div>

      {/* 3D Canvas */}
      

      {/* Footer Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <p className="text-sm">Scroll Down</p>
      </div>
      <iframe src="https://sketchfab.com/models/bd4aa30efaa0455eaf3b4d59e9fe9c65/embed" frameborder="0" className="size-96 my-60" ></iframe>
    </div>
  );
};

export default Generated;

import { useState } from 'react';
import { motion } from 'framer-motion';


export let verr = 0;

const Gen = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const models = ['heart', 'anatomy', 'brain', 'lungs', 'lung'];
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
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
        <motion.textarea 
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your input for the AI..."
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <button 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={async () => {
            const test = userInput.toLowerCase().split(" ");
            
            for (let i = 0; i < test.length; i++) { 
              if (models.includes(test[i])) {
                console.log('Model found!',tests.test);

                verr = 1; // Update verr value
                return 0;
              } else {
                console.log('Model not found!');
              }
              const UpdateJsonInMemory = () => {
                const [jsonData, setJsonData] = useState(test);
              
                const toggleValue = () => {
                  setJsonData((prev) => ({ ...prev, test: false })); // Update in memory
                };
            }
          }}}
          >
          Submit
        </button>
        
        <h3 className="mt-6 text-xl font-bold">AI Response:</h3>
        <div className="mt-2">{aiResponse}</div>
      </motion.div>
    </motion.div>
  );
};

export default Gen;

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
api="AIzaSyChq-R-4y57YaZOO60S1izCyA9SgtJ9_vo";
const app = express();
const cors = require("cors");


app.use(cors());
//app.use(bodyParser.json());
// Middleware to parse JSON bodies
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Welcome to the Generative AI API');
});
const geAI = new GoogleGenerativeAI(api);
app.post('/req', async (req, res) => {
    const {input} = req.body;
    const model = geAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(input);
    const generatedText = result.response.text();
    res.json({ generatedResponse: generatedText });
    console.log(generatedText);
    return result.response.text();
})



app.get("/", (req, res) => {
  res.send("Welcome to the Generative AI API");
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
/*const express = require('express');
   const bodyParser = require('body-parser');
   const axios = require('axios'); // If you're making requests to an external API
   const app = express();
   const PORT = process.env.PORT || 5000;

   app.use(bodyParser.json());

   app.post('/api/message', async (req, res) => {
       const { message } = req.body;

       try {
           // Assuming you're sending the message to the Gemini AI API
           const response = await axios.post('https://api.gemini.ai/v1/messages', { message });
           res.json(response.data);
       } catch (error) {
           console.error(error);
           res.status(500).send('Error communicating with AI service');
       }
   });

   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });*/
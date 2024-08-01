require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// MongoDB connection
  async function run() {
    try {
      // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
      await mongoose.connect(process.env.MONGO_URI, { serverApi: { version: '1', strict: true, deprecationErrors: true } });
      await mongoose.connection.db.admin().command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");

      // Start the server after the connection is established
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });

     } 
   catch{
    console.dir
  } 
}
  run()

  


// Import and use the quiz routes
const quizRoutes = require('./routes/quizRoutes');
app.use('/api', quizRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Handle any requests that don't match the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

// Import and use the user routes
const userRoutes = require('./routes/userRoutes');
const User = require('./models/User');
app.use('/api', userRoutes);




// server.js
import express from 'express';
import { connectToDatabase, addDataToDatabase } from './dbOperations.js';
import dbConfig from './dbConfig.js';

const app = express();
const port = 1433;

// Connect to SQL Server
connectToDatabase(dbConfig)
  .then(() => console.log('Connected to SQL Server'))
  .catch(error => console.error('Error connecting to SQL Server:', error));

// Define an endpoint to handle adding data
app.post('/api/addData', (req, res) => {
  // Retrieve data from request body
  const { addName, addId } = req.body;

  // Add data to the database
  addDataToDatabase(addName, addId)
    .then(() => res.send('Data added successfully'))
    .catch(error => res.status(500).send('Error adding data: ' + error));
});

// Other CRUD endpoints (update, delete, retrieve) would be defined similarly

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));

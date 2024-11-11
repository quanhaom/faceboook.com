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
    if (err) {
      console.error('Error writing to file', err);
      res.status(500).send('Error saving data');
      return;
    }
    res.send('Data saved successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

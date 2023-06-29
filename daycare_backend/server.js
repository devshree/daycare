const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define your API endpoints here



app.post('/api/form', (req, res) => {
  const formData = req.body; // Access the form data sent from the client
  // Save the form data to the database
  // ...
  res.json({ message: 'Form data saved successfully' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
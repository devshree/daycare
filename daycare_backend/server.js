const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(express.json());
// Enable CORS for all routes
app.use(cors());


// Define your API endpoints here
app.post('/api/form', (req, res) => {
  const formData = req.body; // Access the form data sent from the client
  // Save the form data to the database
  // ...
  res.json({ message: '[Server]Form data saved successfully' });
  console.log(`[Server] received ${formData}`);
});


app.listen(port, () => {
  console.log(`[Server] is running on port ${port}`);
});

// Define route handler for GET request to /api/form
app.get('/api/form', (req, res) => {
  // Perform actions to retrieve and send the form data
  // Example: Fetch data from the database
  const formData = {
     name: "Devshree",
      email: "d@gfg.com",
      message: "message for you"
  };

  // Send the form data as the response
  res.json(formData);
  console.log(`[Server] served GET at api/form`);
});

const { name } = require('ejs');
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Your existing route handlers...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Your POST request handler
app.post('/submit', (req, res) => {
  // Extract form data from the request
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Validate the form data (if needed)
  // Perform any necessary data processing or manipulation

  // For demonstration purposes, let's log the form data
  console.log('Received form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Here you can further process the form data (e.g., save it to a database)
  // Once the form data is processed, you can send a response to the client
  res.send('Form submission received successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


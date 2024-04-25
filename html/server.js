// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.post('/submit', (req, res) => {
  // Extract form data from the request
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; // Assuming you also want to capture the message
  // Assuming there's no contactno field in your form based on the provided HTML
  
  // Validate the form data (if needed)
  // Perform any necessary data processing or manipulation

  // Insert the form data into MySQL database
  const sql = "INSERT INTO contact (Name, EMail, Message) VALUES (?, ?, ?)";
  connection.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Form data inserted into database successfully:', result);
    // Optionally, you can send a response back to the client
    res.send('Form submission received and data inserted into database successfully!');
  });
});


// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'null', // Change this to your MySQL root password
  database: 'portfolio' // Change this to the name of your database
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Handle GET request
app.get('/data', (req, res) => {
  // Query database
  connection.query('SELECT * FROM contact', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Enquiry

app.post('/submitting', (req,res)=>{
  const Cname = req.body.Cname;
  const Cemail = req.body.Cemail;
  const Cphone = req.body.Cphone;
  const Cmessage = req.body.Cmessage;

  const sql = "INSERT INTO enquiry (Name, Email, Phno, Message) VALUES (?, ?, ?, ?)";
  connection.query(sql, [Cname, Cemail, Cphone,Cmessage], (err, result) => {
      if (err) {
        console.error('Error inserting data into database:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      console.log('Form data inserted into database successfully:', result);
      // Optionally, you can send a response back to the client
      res.send('Form submission received and data inserted into database successfully!');
  });
});



// Handle GET request
app.get('/dataEnq', (req, res) => {
  // Query database
  connection.query('SELECT * FROM enquiry', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});



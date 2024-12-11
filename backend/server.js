// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'mobile_app',
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('MySQL connected...');
// });

// // Signup endpoint
// app.post('/signup', (req, res) => {
//   const { email, password } = req.body;
//   const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
//   db.query(query, [email, password], (err, result) => {
//     if (err) {
//       return res.status(400).send('Error creating user');
//     }
//     res.send('User created successfully');
//   });
// });

// // Login endpoint
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
//   db.query(query, [email, password], (err, results) => {
//     if (err) {
//       return res.status(400).send('Error logging in');
//     }
//     if (results.length > 0) {
//       res.send('Login successful');
//     } else {
//       res.status(401).send('Invalid email or password');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });




































const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'mobile_app',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    console.log('Received signup request:', { email, password }); // Log the request

    // Check if the email already exists in the database
    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailQuery, [email], (error, results) => {
        if (error) {
            console.error("Error checking email:", error); // Log the error
            return res.status(500).json({ success: false, message: 'Server error.' });
        }

        console.log('Email check results:', results); // Log the results of the email check

        if (results.length > 0) {
            // Email already exists
            return res.status(409).json({ success: false, message: 'This email is already registered.' });
        }

        // If email does not exist, proceed to insert the new user
        const insertUserQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(insertUserQuery, [email, password], (error, results) => {
            if (error) {
                console.error("Error creating user:", error); // Log the error
                return res.status(500).json({ success: false, message: `Error creating user: ${error.message}` });
            }
            console.log('User created successfully:', results); // Log success message
            return res.status(201).json({ success: true, message: 'Account created successfully!' });
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    console.log(`Login attempt - Email: "${email}", Password: "${password}"`);
  
    db.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password],
      (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({ message: 'Server error' });
        }
  
        console.log("Database results:", results); // Log the results
  
        if (results.length > 0) {
          // Match found
          res.status(200).json({ message: 'Login successful' });
        } else {
          // No match found
          res.status(401).json({ message: 'Incorrect email or password' });
        }
      }
    );
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


























































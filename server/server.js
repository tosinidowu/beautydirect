import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use(bodyParser.json());

app.post("/api/signup", async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
  
    db.query('INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)', [email, firstName, lastName, password], (err, results) => {
      if (err) {
        console.error('Error inserting user data into MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    });
  });

//start server
app.listen(PORT, () => {
    console.log("Server started on port 5000. Connected!")
})

//set up route
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

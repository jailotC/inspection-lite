import express from 'express';
import cors from 'cors';
import db from './db.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());               // Allow frontend to connect to backend
app.use(express.json());       // Parse JSON in requests
app.use(express.static('public'));  // Serve HTML/CSS/JS from the 'public' folder

// --- API Endpoints ---

// Get all companies
app.get('/api/companies', (req, res) => {
  db.read();
  res.json(db.data.companies);
});

// Add a new company
app.post('/api/companies', (req, res) => {
  const newCompany = req.body;
  db.data.companies.push(newCompany);
  db.write();
  res.status(201).json(newCompany);
});

// You can add more endpoints for vehicles, inspections, etc. later

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

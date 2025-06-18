require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const authRoutes = require('./routes/auth');

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/candidates', require('./routes/candidates'));

// Voorbeeld endpoint: alle facilities ophalen
app.get('/facilities', async (req, res) => {
  const facilities = await pool.query('SELECT * FROM facilities');
  res.json(facilities.rows);
});

// Server starten
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
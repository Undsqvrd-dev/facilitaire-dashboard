const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Get all candidates
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.*, c."educationLevel", c.education
      FROM "User" u
      LEFT JOIN "Candidate" c ON u.id = c."userId"
      WHERE u.role = 'CANDIDATE'
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({ message: 'Er is een fout opgetreden bij het ophalen van de kandidaten' });
  }
});

// Get candidate by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.*, c."educationLevel", c.education
      FROM "User" u
      LEFT JOIN "Candidate" c ON u.id = c."userId"
      WHERE u.id = $1 AND u.role = 'CANDIDATE'
    `, [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Kandidaat niet gevonden' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching candidate:', error);
    res.status(500).json({ message: 'Er is een fout opgetreden bij het ophalen van de kandidaat' });
  }
});

module.exports = router; 
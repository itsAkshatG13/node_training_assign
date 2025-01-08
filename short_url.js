const express = require('express');

const app = express();

const urlStore = {};


const port = process.env.PORT || 3000;

let count = 1; // Simple count to generate unique IDs

require("dotenv").config();
app.use(express.json());

// Endpoint for post request to shorten a URL
app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;
  console.log(`req ${req.body}`);

  if (!longUrl || typeof longUrl !== 'string') {
    return res.status(400).json({ error: 'Invalid URL provided.' });
  }

  // Generate a simple unique short ID
  const shortId = count.toString(36); // Convert count to base-36 string
  count += 1;

  // Store the mapping
  urlStore[shortId] = longUrl;
  
  //Response json
  res.json({
    shortUrl: `http://localhost:${port}/sh/${shortId}`,
    shortId: shortId,
  });
});

//Return and redirect the user to long url
app.get('/r/:shortId', (req, res) => {
  const { shortId } = req.params;

  const longUrl = urlStore[shortId];

  if (!longUrl) {
    return res.status(404).json({ error: 'No short url exists.' });
  }

  res.redirect(longUrl);
});

app.listen(port, () => {
  console.log(`URL Shortener running at http://localhost:${port}`);
});

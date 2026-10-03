const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Static files serve करें
app.use(express.static(__dirname, { extensions: ['html'] }));

// Root → index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check (Render के लिए)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 → index.html पर भेजें
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ KP PANEL SHOP running on port ${PORT}`);
});

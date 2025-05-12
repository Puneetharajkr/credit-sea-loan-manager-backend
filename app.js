require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const applicationRoutes = require('./routes/applicationRoutes');

// Enhanced CORS configuration
// app.use(cors({
//   origin: 'http://localhost:3005', // Your Vite frontend URL
//   methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// No CORS configuration needed - middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// API routes
app.use('/api', applicationRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}/api/health`);
});
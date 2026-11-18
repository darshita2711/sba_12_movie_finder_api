
import 'dotenv/config';

import express from 'express';
import movieRoutes from './routes/movieRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Movie Finder API is running!');
});

// Connect movie routes
app.use('/api', movieRoutes);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

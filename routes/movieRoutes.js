import express from 'express';

import {searchMovies,getMovieDetails} from '../controllers/movieController.js';
// Create router
const router = express.Router();
// Search movies
router.get('/search', searchMovies);

// Get movie details using IMDb ID
router.get('/movies/:id', getMovieDetails);

// Export router
export default router;


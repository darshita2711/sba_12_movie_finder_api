import axios from 'axios';
import 'dotenv/config';
// search movie controller
export const searchMovies = async (req, res) => {
    try{
        // get movie from title
        const title = req.query.title;

        const page = req.query.page || 1;

        if(!title){
            return res.status(400).json({
                error:'Title is requied'
            });
        }
        // Call OMDb API using Axios
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                s: title,
                page: page,
                apikey: process.env.OMDB_API_KEY
            }
        });
        if (response.data.Response === 'False') {
            return res.status(404).json({
            error: response.data.Error
         });
        }
        // Send movie results
        res.json(response.data);
    }catch (error) {
        console.log(error.message);

        res.status(500).json({
            error: 'Failed to search movies'
        });
    }
};

// display moview controller
export const getMovieDetails = async (req, res) => {
     try {
        // Get IMDb ID from URL
        const id = req.params.id;

        if (!id || id.trim() === '') {
            return res.status(400).json({
                error: 'Movie ID is required'
            });
        }


        // Call OMDb API
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY
            }
        });
        if (response.data.Response === 'False') {
            return res.status(404).json({
                error: response.data.Error
            });
        }
        // Send movie details
        res.json(response.data);

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            error: 'Failed to get movie details'
        });
    }
};
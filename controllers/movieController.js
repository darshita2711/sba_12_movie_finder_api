import axios from 'axios';
import 'dotenv/config';
// search movie controller
export const searchMovies = async (req, res) => {
    try{
        // get movie from title
        const title = req.query.title;

        if(!title){
            return res.status(400).json({
                error:'Title is requied'
            });
        }
        // Call OMDb API using Axios
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        });

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

        // Call OMDb API
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY
            }
        });

        // Send movie details
        res.json(response.data);

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            error: 'Failed to get movie details'
        });
    }
};
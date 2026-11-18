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
export const getMovieDetails = (req, res) => {
    res.send('Movie details function');
};
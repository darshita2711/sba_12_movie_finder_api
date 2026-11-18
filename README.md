# Movie Finder API

A RESTful API built with Node.js and Express that searches for movies
and retrieves movie details using the OMDb API.

## Features

- Search movies by title
- Retrieve movie details using an IMDb ID
- Pagination for search results
- Input validation
- Error handling
- Uses Axios to communicate with OMDb

## Technologies Used

- Node.js
- Express.js
- Axios
- dotenv
- OMDb API

## Installation

1. Clone this repository:

   git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project:

   cd movie-finder-api

3. Install dependencies:

   npm install

4. Create a `.env` file in the root folder:

   OMDB_API_KEY=your_api_key_here

5. Start the development server:

   npm run dev

The server runs at http://localhost:3001.

## API Endpoints

### 1. Search Movies

GET /api/search?title=batman

Optional pagination:

GET /api/search?title=batman&page=2

### 2. Get Movie Details

GET /api/movies/:id

Example:

GET /api/movies/tt0372784

## API Provider

Movie data is provided by the OMDb API:
https://www.omdbapi.com/

## Environment Variables

| Variable | Description |
|---|---|
| OMDB_API_KEY | Your OMDb API key |

Never commit your `.env` file to GitHub.
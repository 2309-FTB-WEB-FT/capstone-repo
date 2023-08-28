const express = require(`express`);
const router = express.Router();
const { getAllShows, getShowByGenre, createShow, updateShow, deleteShow, getShowByID, getShowByTitle } = require('../db/shows');
const { showData } = require(`../db/showData`)



router.get('/', async (req, res, next) => {
    try {
       
        const shows = await getAllShows();
        console.log(shows)
        res.send(shows);
   } catch (error) {
        next(error);
    }
});

router.get('/show/:name', async (req, res, next) => {
    try {
        //console.log('hello')
        const show = await getShowByTitle(req.params.name);
     
        console.log(show);
        res.send(show);

   } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        //console.log('yellow')
        const id = await getShowByID(req.params.id);
        console.log(id)
        res.send(id)
    } catch (error) {
        next (error);
    }
});

router.get('/genre/:genre', async (req, res, next) => {
    try {
        const genre = await getShowByGenre(req.params.genre);
        res.send(genre)
    } catch (error) {
        next (error)
    }
})

router.get('/search', async (req, res, next) => {
    try {
        const searchQuery = req.query.query; // Get the search query from the request query parameter
        const results = await searchShowsByQuery(searchQuery); // Implement this function to search for shows based on the query
        res.send(results);
    } catch (error) {
        next(error);
    }
});

module.exports = router
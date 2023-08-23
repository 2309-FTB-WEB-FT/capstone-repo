const express = require(`express`);
const router = express.Router();
const { getAllShows, getShowById, createShow, updateShow, deleteShow, getShowByID, getShowByName } = require('../db/shows');
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

router.get('/:name', async (req, res, next) => {
    try {
        console.log('hello')
        const show = await getShowByName(req.params.name);
        console.log(show.name);
        res.send(show.name);
   } catch (error) {
        next(error);
    }
});

module.exports = router
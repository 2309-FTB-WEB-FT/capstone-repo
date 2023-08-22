const express = require(`express`);
const router = express.Router();
const { getAllShows, getShowsId, createShow, updateShow, deleteShow } = require('../db/shows');
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

module.exports = router
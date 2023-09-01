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

router.get('/show/:id', async (req, res, next) => {
    try {
        // console.log('yellow')
        const id = await getShowByID(req.params.id);
        console.log(id)
        res.send(id)
    } catch (error) {
        next (error);
    }
});

router.get('/:name', async (req, res, next) => {
    try {
        console.log('hello')
        const show = await getShowByTitle(req.params.name);
     
        console.log(show);
        res.send(show);

   } catch (error) {
        next(error);
    }
});

<<<<<<< HEAD
router.get('/show/:id', async (req, res, next) => {
    try {
        console.log('yellow')
        const id = await getShowByID(req.params.id);
        console.log(id)
        res.send(id)
    } catch (error) {
        next (error);
    }
});
=======
>>>>>>> 88886e59d563605ced5f8ac473553913540e3848

router.get('/genre/:genre', async (req, res, next) => {
    try {
        const genre = await getShowByGenre(req.params.genre);
        res.send(genre)
    } catch (error) {
        next (error)
    }
})

module.exports = router